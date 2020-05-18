import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);

  // 2.new一个实例对象
  const toast = new toastConstructor;

  // 3.将组件对象（new出来的实例）手动挂载某个元素上
  toast.$mount(document.createElement('div'))

  // 4.将组件中的元素标签添加到body标签中
  document.body.appendChild(toast.$el)

  // 5.将组件Toast添加到Vue原形对象的$toast属性中
  Vue.prototype.$toast = toast

}




export default obj 