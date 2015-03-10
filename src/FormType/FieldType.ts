///ts:ref=underscore.d.ts
/// <reference path="../../typings/generated/underscore/underscore.d.ts"/> ///ts:ref:generated
///ts:ref=handlebars.d.ts
/// <reference path="../../typings/generated/handlebars/handlebars.d.ts"/> ///ts:ref:generated
///ts:ref=node.d.ts
/// <reference path="../../typings/generated/node/node.d.ts"/> ///ts:ref:generated
import AbstractFormType = require('./AbstractFormType');
import FieldTypeOptionsInterface = require('../Options/FieldTypeOptionsInterface');
import StringUtil = require('../Util/StringUtil');
import _ = require('underscore');
import Handlebars = require('Handlebars');
import fs = require('fs');

/**
 * Base class for all form fields
 */
class FieldType extends AbstractFormType {

  protected setDefaultOptions(options:FieldTypeOptionsInterface):FieldTypeOptionsInterface {
    var uniqueId:string;

    _.defaults(options, {
      tagName: 'input',
      type: 'field',
      label: null,   // to be defaulted below, after we have name option
      labelAttrs: {},
      template: this.Handlebars.compile(
        fs.readFileSync(__dirname + '/../View/form/field_widget.html.hbs', 'utf8')
      )
    });

    options = super.setDefaultOptions(options);

    // set default label
    if (_.isNull(options.label)) {
      options.label = StringUtil.camelCaseToWords(options.name);
    }

    // Set the `for`/`id` matching attributes
    uniqueId = _.uniqueId(options.name + '_');
    _.defaults(options.attrs, {
      id: uniqueId
    });
    _.defaults(options.labelAttrs, {
      'for': uniqueId
    });

    return options;
  }

}

export = FieldType;