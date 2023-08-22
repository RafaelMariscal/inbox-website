import InputCharCounter from './InputCharCounter'
import InputContainer from './InputContainer'
import InputErrorMessages from './InputErrorMessages'
import InputLabel from './InputLabel'
import InputRoot from './InputRoot'
import InputSelect from './InputSelect'
import InputText from './InputText'
import InputTextarea from './InputTextarea'

const Input = {
  Root: InputRoot,
  Input: InputText,
  Textarea: InputTextarea,
  Select: InputSelect,
  Container: InputContainer,
  Label: InputLabel,
  ErrorMessage: InputErrorMessages,
  CharCounter: InputCharCounter,
}

export default Input
