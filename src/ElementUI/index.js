import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Loading,
  Col,
  Row,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Switch,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Select,
  Option,
  OptionGroup,
  DatePicker,
  TimeSelect,
  TimePicker,



  Avatar,
  Carousel,
  CarouselItem,
  Image,
  Badge,
  Divider,
  Tabs,
  TabPane,

} from 'element-ui'

Vue.use(Button)
Vue.use(Loading.directive)
Vue.use(Col)
Vue.use(Row)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(CheckboxGroup)
Vue.use(CheckboxButton)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)





Vue.use(Avatar)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Badge)
Vue.use(Divider)
Vue.use(Tabs)
Vue.use(TabPane)


Vue.prototype.$loading = Loading.service
