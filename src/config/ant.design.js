import { Vue } from 'vue-property-decorator';
import '@/assets/less/index.less';
import {
  Alert,
  DatePicker,
  Layout,
  Table,
  Card,
  Form,
  Menu,
  Row,
  Col,
  Input,
  AutoComplete,
  Select,
  Breadcrumb,
  Checkbox,
  Radio,
  Button,
  Icon,
  Spin,
  Avatar,
  Tabs,
  Tooltip,
  Dropdown,
  Modal,
  Divider } from 'ant-design-vue';

Vue.use(Layout);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Card);
Vue.use(Breadcrumb);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);

Vue.use(Form);
Vue.use(Input);
Vue.use(AutoComplete);
Vue.use(Select);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(Button);

Vue.use(Icon);
Vue.use(Divider);
Vue.use(Spin);
Vue.use(Modal);
Vue.use(Avatar);
Vue.use(Tooltip);
Vue.use(Dropdown);
Vue.use(Alert);

Vue.use(DatePicker);
Vue.prototype.$confirm = Modal.confirm;
