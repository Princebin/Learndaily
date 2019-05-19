import analysis from './zh-CN/analysis';
import exception from './zh-CN/exception';
import form from './zh-CN/form';
import globalHeader from './zh-CN/globalHeader';
import login from './zh-CN/login';
import menu from './zh-CN/menu';
import monitor from './zh-CN/monitor';
import result from './zh-CN/result';
import settingDrawer from './zh-CN/settingDrawer';
import settings from './zh-CN/settings';
import pwa from './zh-CN/pwa';
import component from './zh-CN/component';

export default {
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.home.introduce': '介绍',
  'app.forms.basic.title': '基础表单',
  'app.forms.basic.description':
    '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
  'app.magement.home.title': '主页',
  'app.magement.home.description': '这是个人财务管理主页',
  'app.magement.weeklyAssets.title': '每周资金',
  'app.magement.weeklyAssets.description': '这是每周资金统计页',
  'app.magement.Debt.title': '债务',
  'app.magement.Debt.description': '这是所有相关债务',
  'app.magement.Income.title': '每周收入',
  'app.magement.Income.description': '这是每周收入统计页',
  'app.magement.Pay.title': '每周支出',
  'app.magement.Pay.description': '这是每周支出统计页',
  'app.magement.Salary.title': '工资',
  'app.magement.Salary.description': '这是每月工资统计页',
  ...analysis,
  ...exception,
  ...form,
  ...globalHeader,
  ...login,
  ...menu,
  ...monitor,
  ...result,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};
