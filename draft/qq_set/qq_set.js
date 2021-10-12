(function () {
  // 请求样式接口 动态生成DOM 节点
  var data = {
    position: 'left_center',// 所处的位置
    style: 1, // 客服位置
    info: {
      WeChat: {
        isShow: true,
        sort: 1, // 	排序 数字越大 排列越靠前
        func: [{
          WeChatCode: 'https://preapiconsole.71360.com/file/read/www/M00/0E/F3/wKj0f2FEEPmAVYqtAAuV6pmJ1Mc671.png',
          text: '微信扫一扫'
        }]
      },
      QQ: {
        isShow: true,
        sort: 6, // 	排序 数字越大 排列越靠前
        func: [{
          qq: '1377054982',
          name: 'name'
        },
        {
          qq: '312345',
          name: 'name3'
        },
        {
          qq: '512345',
          name: 'name2'
        },
        {
          qq: '412345',
          name: 'name1'
        }]
      },
      Phone: {
        isShow: true,
        sort: 5,
        func:[{
          phone: '1234567890',
          name: 'name'
        },
        {
          phone: '2234567890',
          name: 'name2'
        },
        {
          phone: '3334567890',
          name: 'name4'
        }]
      },
      OnlineMsg: {
        isShow: true,
        sort: 2,
        func: [{
          url: 'http://site3.cc/abababababab'
        }]
      },
      Ttalk: {
        isShow: true,
        sort: 3,
        func:''
      },
      Ztb:{
        isShow: true,
        sort: 4,
        func:''
      },
    }
  }
  if (data) {
    //initDom() // 当data存在的时候才是设置样式的
    //但是这边数据要进行一个排序 他的位置 是一个排序排序放置到
    var data_sort = Object.keys(data.info)
    data_sort.sort(function (a, b) { // 降序排列吧
      // console.log(a, b, data.info[a].sort, data.info[b].sort )
      return data.info[b].sort - data.info[a].sort
    })
    var arr= data_sort.filter(function (item) {
      return data.info[item].isShow // 这边过滤掉 isShow 为 false的数据
    })
    initDom(arr)
  }
   
  function initDom(data_sort) { // 怎么写 我这边微信要写一个DOM qq也是要写一个块
    // 这边 会有一个 左中 左下  右中 右下 所以 这个东西的位置会有不固定的位置 这边怎么写 动态添加css 还是添加 class 
    // 智能名片 和 tTalk  这边要在确认一下我们这边怎么写 应该不会自己直接获取DOM节点
    var position_value = data.position // 'left_center' 
    position_class = position_value.split('_')
    var div = document.createElement('div');
    div.classList.add('qq-set-container', position_class[0], position_class[1], 'qq_set_'+data.style)
    var dom_data = {}
    if (data_sort.indexOf('QQ') !== -1) { // QQ 客服
      dom_data.QQ_dom = qq_dom_set(data.info.QQ.func)
    }
    
    if (data_sort.indexOf('WeChat') !== -1) { // 微信
      dom_data.WeChat_dom = weixin_set(data.info.WeChat.func);
    }
    
    if (data_sort.indexOf('Phone') !== -1) { // 电话
      dom_data.Phone_dom = phone_set(data.info.Phone.func);
    }
    
    if (data_sort.indexOf('OnlineMsg') !== -1) { // 在线留言
      dom_data.OnlineMsg_dom = feedback_set(data.info.OnlineMsg.func);
    }

    if (data_sort.indexOf('Ttalk') !== -1) { // Ttalk
      dom_data.Ttalk_dom = ttalk_set()
    }
    if (data_sort.indexOf('Ztb') !== -1) { // 智能名片
    
      var id_card = id_card_url()
      dom_data.Ztb_dom = id_card_set(id_card);
    }
    
    data_sort.forEach(function (item) {
      // console.log(dom_data[item+'_dom'])
      div.appendChild(dom_data[item+'_dom'])
    })
  
    document.querySelector('body').appendChild(div)
    addMouseenter(); // 绑定时事件函数
  }
  function addMouseenter() {
    // 给 set-suspend-item 添加mouseenter 
    // console.log(document.querySelectorAll('.qq-set-container .set-suspend-item'))
    var item_list = [].slice.call(document.querySelectorAll('.qq-set-container .set-suspend-item')).filter(function (item) {
      return !item.classList.contains('set-suspend-item-ttalk')
    })// ttalk 这边 要出发点击事件 而不是mouseenter  mouseleave
    item_list.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        item.querySelector('.set-ul-style') && item.querySelector('.set-ul-style').classList.add('show-item')
        item.querySelector('.inner-center') && (item.querySelector('.inner-center').style.display="block");
      })
      item.addEventListener('mouseleave', function () {
        console.log('鼠标移除')
        item.querySelector('.set-ul-style') && item.querySelector('.set-ul-style').classList.contains('show-item') && item.querySelector('.set-ul-style').classList.remove('show-item')
        item.querySelector('.inner-center') && (item.querySelector('.inner-center').style.display="none");
      })
    })
    // 如果是存在 ttalk的时候要给这个节点添加点击事件
    var ttalk_dom = document.querySelector('.qq-set-container .set-suspend-item.set-suspend-item-ttalk')
    if (ttalk_dom) {
      ttalk_dom.addEventListener('click', function () {
        // 模拟点击事件
        document.querySelector('.this_tt_click_dom').click()
      })
    }
  }
  function qq_dom_set(qq_list) { // 创建QQ DOM 节点 但是我看到之前的好像是 中文站和外文站显示的class不一样 可能是图片不一样
    var div = document.createElement('div');

    div.classList.add('set-suspend-item','set-suspend-item-app')
    var ul = document.createElement('ul');
    ul.classList.add('suspend-qq-ul', 'set-ul-style')
    if (qq_list) {
      qq_list.forEach(function (qq) {
        var li = document.createElement('li');
        var a_dom = '<a target="_blank" class="item-link" href="https://wpa.qq.com/msgrd?v=3&amp;uin=' + qq.qq + '&amp;site=qq&amp;menu=yes"><div class="qq-img"><img src="static/js/fqq/qq.png" /></div> ' + qq.name + '</a>'
        li.innerHTML = a_dom;
        ul.appendChild(li)
      });
      var inner_center = document.createElement('div');
      inner_center.appendChild(ul)
      inner_center.classList.add('inner-center')
      div.appendChild(inner_center)
    }
    var icon = document.createElement('i');
    icon.classList.add('set-qq-icon')
    div.appendChild(icon);
    return div
  }
  function weixin_set(weixin) { // 微信这边
    var div = document.createElement('div');
    div.classList.add('set-suspend-item', 'set-suspend-item-weixin');
    if (weixin) {
      var span = document.createElement('div');
      span.classList.add('weixin', 'set-ul-style');
      span.innerHTML = ('<img class="weixin-qcode" src="' + weixin[0].WeChatCode + '"/> <div class="weixin-desc">'+weixin[0].text+'</div>');
      
      var inner_center = document.createElement('div');
      inner_center.appendChild(span)
      inner_center.classList.add('inner-center')
      div.appendChild(inner_center)
    }
   

    // div.appendChild(span);
    var icon = document.createElement('i');
    icon.classList.add('set-qq-icon')
    div.appendChild(icon);
    return div
  }
  // set-suspend-item-feedback 在线留言
  function feedback_set(url) { // /p-message.html
    var div = document.createElement('div');
    div.classList.add('set-suspend-item', 'set-suspend-item-feedback');
    if (url) {
      div.innerHTML = ('<a class="item-link" href="' + url[0].url + '"></a>');
    }
    
    var icon = document.createElement('i');
    icon.classList.add('set-qq-icon')
    div.appendChild(icon);
    return div
  }
  function phone_set(list) { // 电话咨询 phone
    var div = document.createElement('div');
    div.classList.add('set-suspend-item', 'set-suspend-item-phone');
    if (list) {
      var ul = document.createElement('ul');
      ul.classList.add('phone-ul', 'set-ul-style');
      
      list.forEach(function (phone) {
        var li = document.createElement('li');
        li.innerHTML = ('<a class="item-link" href="tel:' + phone.phone + '"> <div class="phone-name">'+phone.name+'：</div> <div class="phone-num">'+ phone.phone + '</div></a>');
        
        ul.appendChild(li)
      })

      var inner_center = document.createElement('div');
      inner_center.appendChild(ul)
      inner_center.classList.add('inner-center')
      div.appendChild(inner_center)
    }
    // div.appendChild(ul)
    var icon = document.createElement('i');
    icon.classList.add('set-qq-icon')
    div.appendChild(icon);
    return div
  }
  function id_card_set(idcard) { // 智能名片 只能名片这边 是之前项目引入的 这边需要获得一个图片的src
    var div = document.createElement('div');
    div.classList.add('set-suspend-item', 'set-suspend-item-idcard');
    var span = document.createElement('div');
    span.classList.add('weixin', 'set-ul-style');
    span.innerHTML = ('<img class="weixin-qcode" src="' + idcard.url + '"/> <div class="weixin-desc">' + idcard.desc + '</div>');

    var inner_center = document.createElement('div');
    inner_center.appendChild(span)
    inner_center.classList.add('inner-center')
    div.appendChild(inner_center)

    var icon = document.createElement('i');
    icon.classList.add('set-qq-icon')
    div.appendChild(icon);
    // div.appendChild(span);
    return div;
  }
  function id_card_url() { // 获取智能名片的二维码card 这个 是项目中嵌入智能名片
    let dom = document.querySelector("#qrBox #ztbQrBox img")
    if (!dom) return ''
    return ({
      url: dom.getAttribute('src'),
      desc:dom.nextSibling.innerHTML
    })
  }
  function ttalk_set() { // ttalk  
    var div = document.createElement('div');
    div.classList.add('set-suspend-item', 'set-suspend-item-ttalk');
    var icon = document.createElement('i');
    icon.classList.add('set-qq-icon')
    div.appendChild(icon);
    return div;
  }
  // TT_All_Dialog ttalk 这个ID的display 控制对话框的显示和隐藏
  // 这边样式少了一个正三角竖起来的正三角
 })()