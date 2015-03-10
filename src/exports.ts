//ts:ref=node.d.ts
import AbstractFormType = require('./FormType/AbstractFormType');
import GroupType = require('./FormType/GroupType');
import FormType = require('./FormType/FormType');
import FieldType = require('./FormType/FieldType');
import TextType = require('./FormType/TextType');
import ChoiceType = require('./FormType/ChoiceType');
import OptionType = require('./FormType/OptionType');

var FormTypeExports = {
  AbstractFormType: AbstractFormType,
  GroupType: GroupType,
  FormType: FormType,
  FieldType: FieldType,
  TextType: TextType,
  ChoiceType: ChoiceType,
  OptionType: OptionType
};
global.FormTypes = FormTypeExports;
export = FormTypeExports;