import Vue from 'vue';

const handleScroll = (el, scrollHeight = 200, classToAdd = 'action') => {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const offsetTop = rect.top + scrollTop;
  let in_position = offsetTop + scrollHeight;
  let window_bottom_position = window.pageYOffset + window.innerHeight;

  if (in_position < window_bottom_position && !el.classList.contains(classToAdd)) {
    el.classList.add(classToAdd);
  }
};


const throttle = (fn, waitMs) => {
  var time = Date.now();
  var timeout;
  return function () {
    if ((time + waitMs - Date.now()) < 0) {
      fn();
      time = Date.now();
    } else {
      if (timeout) window.clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn();
      }, waitMs);
    }
  };
};


Vue.directive('scrollClass', {
  inserted: (el, binding) => {

    // valueの存在チェック
    if ('value' in binding) {
      // 初期classの設定
      if (binding.value.targetClass != undefined) {
        el.classList.add(binding.value.targetClass);
      }
      else {
        el.classList.add('target');
      }

      handleScroll(el, binding.value.hitOffset, binding.value.addClass);

      el.listener = throttle(() => {
        handleScroll(el, binding.value.hitOffset, binding.value.addClass);
      }, 100);
    }
    else {
      el.classList.add('target');

      handleScroll(el);

      el.listener = throttle(() => {
        handleScroll(el);
      }, 100);
    }

    window.addEventListener('scroll', el.listener);
  },
  update: (el, binding) => {
    if ('value' in binding) {
      handleScroll(el, binding.value.hitOffset, binding.value.addClass);
    }
    else {
      handleScroll(el);
    }
  },
  unbind: (el) => {
    if (el.listener) {
      window.removeEventListener('scroll', el.listener);
      el.listener = undefined;
    }
  }
});