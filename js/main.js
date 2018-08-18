const dataStore = [{
    project: 'Socket Channel',
    group: 'party.liyin',
    name: 'socketchannel',
    url: 'https://github.com/cubesky/SocketChannel',
    description: 'Easy TCP/UDP transport',
    source: 'Github',
    type: 'jar',
    license: 'GPLv3',
    version: ['1.0', '2.0', '2.1', '3.0', '4.0', '5.0', '5.1', '6.0', '6.1', '7.0', '8.0', '8.1', '8.2']
}, {
    project: 'Gobang Board',
    group: 'party.liyin',
    name: 'gobangboard',
    url: 'https://github.com/cubesky/GobangBoard',
    description: 'A gobang game board management library written in Kotlin',
    source: 'Github',
    type: 'jar',
    license: 'AGPLv3',
    version: ['1.0', '2.0']
}, {
    project: 'Protocol Data Router',
    group: 'party.liyin',
    name: 'protocolrouter',
    url: 'https://github.com/cubesky/ProtocolRouter',
    description: 'A Library written in kotlin to transform low-level data byte array to Protocol with mark and route them to another system',
    source: 'Github',
    type: 'jar',
    license: 'Apache 2.0',
    version: ['0.1', '0.2']
}, {
    project: 'Easy Wifi P2P',
    group: 'party.liyin',
    name: 'easywifip2p',
    url: 'https://github.com/cubesky/EasyWifiP2P',
    description: 'A Library written in Kotlin and Java to make your Android WifiDirect Easiler',
    source: 'Github',
    type: 'aar',
    license: 'MIT',
    version: ['1.0', '2.0','2.1','2.2','2.3']
}, {
    project: 'Multicast Helper',
    group: 'party.liyin',
    name: 'multicasthelper',
    url: 'https://github.com/cubesky/MulticastHelper',
    description: 'A Java library to make your multicast easiler',
    source: 'Github',
    type: 'jar',
    license: 'MIT',
    version: ['1.0', '1.1']
}, {
    project: 'Easy Android BLE',
    group: 'party.liyin',
    name: 'easyble',
    url: '',
    description: 'A library written in Java and Kotlin to make your Android BLE connect easiler',
    source: 'Github',
    type: 'aar',
    license: 'MIT',
    version: []
}, {
    project: 'Flazr Library',
    group: 'org.flazr',
    name: 'library',
    url: 'https://github.com/cubesky/FlazrLibrary',
    description: 'Flazr Streaming Library',
    source: 'Github',
    type: 'jar',
    license: 'LGPLv3',
    version: ['1.0']
}, {
    project: 'SameSentence',
    group: 'party.liyin',
    name: 'samesentence',
    url: 'https://github.com/cubesky/SameSentence',
    description: 'Sentence Analysis Library',
    source: 'Github',
    type: 'jar',
    license: 'Apache 2.0',
    version: ['1.0', '1.1']
}, {
    project: 'WordAnalytics',
    group: 'party.liyin',
    name: 'wordanalytics',
    url: 'https://github.com/cubesky/WordAnalytics',
    description: 'Document Index and Full text Search Library',
    source: 'Github',
    type: 'jar',
    license: 'Apache 2.0',
    version: ['1.0', '2.0']
}, {
    project: 'Kefjs',
    group: 'party.liyin',
    name: 'kefjs',
    url: 'https://github.com/cubesky/Kefjs',
    description: 'A Kotlin/JS Wrapper for ef.js',
    source: 'Github',
    type: 'jar',
    license: 'MIT',
    version: ['0.7.1', '0.7.1-K2', '0.7.1-K3', '0.7.1-K4', '0.7.1-K5', '0.7.1-K6', '0.7.1-K7', '0.7.1-K8', 
              '0.7.2-K1', '0.7.2-K2', '0.7.2-K3', '0.7.2-K4', '0.7.2-K5', '0.7.2-K6', '0.7.2-K7', '0.7.2-K10',
              '0.8.0-K1', '0.8.0-K2',
              '0.8.1-K1', '0.8.1-K2', '0.8.1-K3',
              '0.8.2-K1']
}, {
    project: 'KPagejs',
    group: 'party.liyin',
    name: 'kpagejs',
    url: 'https://github.com/cubesky/KPagejs',
    description: 'A Kotlin/JS Wrapper for page.js',
    source: 'Github',
    type: 'jar',
    license: 'MIT',
    version: ['1.8.6', '1.8.6-K2', '1.8.6-K3', '1.8.6-K4', '1.8.6-K5']
}, {
    project: 'AutoRecyclerAdapter',
    group: 'party.liyin',
    name: 'skyrecycleradapter',
    url: 'https://github.com/cubesky/AutoRecyclerAdapter',
    description: 'An ugly and easiler way to control RecyclerView',
    source: 'Github',
    type: 'aar',
    license: 'MIT',
    version: ['0.1', '0.2', '0.3', '0.4', '0.5']
}]
var licenseData = {
  'GPLv3': {
    url: 'https://www.gnu.org/licenses/gpl-3.0.en.html#content', fullname: 'The GNU General Public License v3.0'
  },
  'LGPLv3': {
    url: 'https://www.gnu.org/licenses/lgpl-3.0.en.html', fullname: 'GNU Lesser General Public License v3.0'
  },
  'AGPLv3': {
    url: 'https://www.gnu.org/licenses/agpl-3.0.en.html', fullname: 'GNU Affero General Public License v3.0'
  },
  'Apache 2.0': {
    url: 'https://www.apache.org/licenses/LICENSE-2.0', fullname: 'Apache License Version 2.0'
  },
  'MIT': {
    url: 'https://opensource.org/licenses/MIT', fullname: 'MIT License'
  }
}
const ef_table_template = ef.t`
>tbody
  +librarylist
`
const ef_table_template_sm = ef.t`
>div
  +librarylist
`
const ef_template = ef.t`
>tr
  #data-type = {{scr = large}}
  >td
    .{{project}}
    >button.mdui-btn.mdui-btn-icon.mdui-ripple.fa.fa-question-circle
      #mdui-tooltip = { content : '{{description}}' }
  >td
    .{{group}}
  >td
    .{{name}}
  >td
    >span.{{disabled}}
      >select.mdui-select#vlist
        @closed&.mdui&.select = vSync
        %value = {{version_select}}
        #id = vlist-lg-{{id}}
        #mdui-select
        +versions
    .{{latest}}
  >td
    .{{type}}
  >td
    >a.mdui-btn.mdui-btn-dense.mdui-ripple
      #target = _blank
      #href = {{url}}
      #mdui-tooltip = { content:'Go to Home Page' }
      .{{source}}
  >td
    >a.mdui-btn.mdui-btn-dense.mdui-ripple
      #target = _blank
      #href = {{license_url}}
      #mdui-tooltip = { content:'{{license_fullname}}' }
      .{{license_name}}
  >td.mdui-p-l-1
    >button.mdui-btn.mdui-btn-dense.mdui-ripple.mdui-float-right.mdui-text-uppercase#btncpy
      #mdui-menu = {target: '#menu-list-id-{{id}}', position: 'top', align: 'right'}
      .Copy
    >ul.mdui-menu
      #id = menu-list-id-{{id}}
      >li.mdui-menu-item
        >button.btncopy.mdui-btn.mdui-btn-block.mdui-ripple
          #data-clipboard-action = copy
          #data-clipboard-text = <dependency>&n  <groupId>{{group}}</groupId>&n  <artifactId>{{name}}</artifactId>&n  <version>{{version_select}}</version>{{maven_other}}&n</dependency>
          .Maven
      >li.mdui-menu-item
        >button.btncopy.mdui-btn.mdui-btn-block.mdui-ripple
          #data-clipboard-action = copy
          #data-clipboard-text = implementation '{{group}}:{{name}}:{{version_select}}{{gradle_other}}'
          .Gradle
`
const ef_template_sm = ef.t`
>div.mdui-row.mdui-m-b-2
  #data-type = {{scr = small}}
  >div.mdui-card
    >div.mdui-card-primary
      >div.mdui-card-primary-title
        .{{project}}
    >div.mdui-card-content
      >div
        >strong
          .Group: 
        .{{group}}
      >div
        >strong
          .Name: 
        .{{name}}
      >div
        >strong
          .Version: 
        >span.{{disabled}}
          >select.mdui-select#vlist
            @closed&.mdui&.select = vSync
            %value = {{version_select}}
            #id = vlist-sm-{{id}}
            #mdui-select
            +versions
        .{{latest}}
      >div
        >strong
          .Type: 
        .{{type}}
      >div
        >strong
          .Description: 
        .{{description}}
    >div.mdui-card-actions
      >div.mdui-row
        >a.mdui-btn.mdui-ripple.mdui-m-l-1
          #target = _blank
          #href = {{url}}
          #mdui-tooltip = { content:'Go To Project' }
          .{{source}}
        >a.mdui-btn.mdui-ripple
          #target = _blank
          #href = {{license_url}}
          #mdui-tooltip = { content:'{{license_fullname}}' }
          .{{license_name}}
        >button.mdui-btn.mdui-float-right.mdui-text-uppercase#btncpy
          #mdui-menu = {target: '#menu-id-{{id}}', position: 'top', align: 'right'}
          .Copy
        >ul.mdui-menu
          #id = menu-id-{{id}}
          >li.mdui-menu-item
            >button.btncopy.mdui-btn.mdui-btn-block.mdui-ripple
              #data-clipboard-action = copy
              #data-clipboard-text = <dependency>&n  <groupId>{{group}}</groupId>&n  <artifactId>{{name}}</artifactId>&n  <version>{{version_select}}</version>{{maven_other}}&n</dependency>
              .Maven
          >li.mdui-menu-item
            >button.btncopy.mdui-btn.mdui-btn-block.mdui-ripple
              #data-clipboard-action = copy
              #data-clipboard-text = implementation '{{group}}:{{name}}:{{version_select}}{{gradle_other}}'
              .Gradle
`
const ef_template_version = ef.t`
>option
  #value = {{version}}
  .{{version}}
`
const ef_donate_table_template = ef.t`
>tbody
  +donatelist
`
const ef_donate_template = ef.t`
>tr
  >td
    .{{name}}
  >td
    .{{amount}}￥
`
const ef_donate_loading_template = ef.t`
>tr
  >td
    #colspan = 2
    .Loading donate list...
`
const ef_donate_empty_template = ef.t`
>tr
  >td
    #colspan = 2
    .Donate list is empty...
`
const ef_donate_error_template = ef.t`
>tr
  >td
    #colspan = 2
    .An error occurred when fetching donate list.
`
const maven_repo = `<repository>
  <id>cubesky-mvn</id>
  <name>CubeSkyMVN</name>
  <url>https://cubesky-mvn.github.io</url>
</repository>`
const gradle_repo = `maven {
  url 'https://cubesky-mvn.github.io'
}`
var $$ = mdui.JQ
const extstarsAppId = '26'
var copyDialog = new mdui.Dialog('#copy-dialog', { history: false });
document.getElementById('copy-dialog').addEventListener('open.mdui.dialog', function () {
  $$('#manual-copy')[0].style.height = '80%'
  copyDialog.handleUpdate()
});
$$('#maven-install')[0].setAttribute('data-clipboard-text', maven_repo);
$$('#gradle-install')[0].setAttribute('data-clipboard-text', gradle_repo);

const large_library = new ef_table_template()
const small_library = new ef_table_template_sm()

function switchState(state){
  if(state.$data.scr === 'large') {
    return small_library.librarylist[state.$data.id]
  } else {
    return large_library.librarylist[state.$data.id]
  }
}

large_library.$mount({target: $$('#library-list')[0]})
small_library.$mount({target: $$('#library-list-sm')[0]})

for (var i = 0; i < dataStore.length; i++) {
  var data = dataStore[i]
  var disabled
  var latest
  var gradle_other = '@' + data.type
  var maven_other = '\n  <type>' + data.type + '</type>'
  if (data.version.length === 0) {
    disabled = 'mdui-hidden'
    latest = 'WIP'
  } else if(data.version.length === 1) {
    disabled = 'mdui-hidden'
    latest = data.version[0]
  } else {
    disabled = ''
    latest = ''
  }
  if (data.type === '' || data.type === 'jar') {
    gradle_other = ''
    maven_other = ''
  }
  var license = licenseData[data.license]
  if (license === undefined) {
    license = { url: '', fullname: 'License Data Not Found' }
  }
  var listdata = {
      project: data.project,
      group: data.group,
      name: data.name,
      type: data.type,
      description: data.description,
      source: data.source,
      url: data.url,
      license_url: license.url,
      license_fullname: license.fullname,
      license_name: data.license,
      id: i,
      disabled: disabled,
      latest: latest,
      maven_other: maven_other,
      gradle_other: gradle_other
  }
  large_library.librarylist.push(new ef_template({
    $data: listdata,
    $methods: {
      vSync ({state}) {
        switchState(state).$data.version_select = state.$data.version_select
        new mdui.Select(switchState(state).$refs.vlist,{}).handleUpdate()
      }
    }
  }))
  small_library.librarylist.push(new ef_template_sm({
    $data: listdata,
    $methods: {
      vSync ({state}) {
        switchState(state).$data.version_select = state.$data.version_select
        new mdui.Select(switchState(state).$refs.vlist,{}).handleUpdate()
      }
    }
  }))
  for (var v = (data.version.length - 1); v >= 0; v--) {
    large_library.librarylist[i].versions.push(new ef_template_version({$data:{ version: data.version[v] }}))
    small_library.librarylist[i].versions.push(new ef_template_version({$data:{ version: data.version[v] }}))
  }
  if (data.version.length === 0) {  } else if(data.version.length === 1) {
    large_library.librarylist[i].$data.version_select = data.version[0]
    small_library.librarylist[i].$data.version_select = data.version[0]
  } else {
    large_library.librarylist[i].$data.version_select = data.version[data.version.length - 1]
    small_library.librarylist[i].$data.version_select = data.version[data.version.length - 1]
  }
  if (data.version.length === 0) {
    $$(large_library.librarylist[i].$refs.btncpy).attr('disabled','disabled')
    $$(small_library.librarylist[i].$refs.btncpy).attr('disabled','disabled')
  }
}

mdui.mutation()

const donate_list = new ef_donate_table_template()
donate_list.$mount({target: $$('#donate-list')[0]})
donate_list.donatelist.push(new ef_donate_loading_template())
const params_donate_list = new URLSearchParams()
params_donate_list.append('limit', 300)
params_donate_list.append('order_type', 1)
axios.post('https://accounts.extstars.com/api/v2/donation/pull', params_donate_list, {
  headers: {
    'AppId': extstarsAppId,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}).then(function(result) {
  donate_list.donatelist.empty()
  if (result.data.code === 100) {
    for (donate_single in result.data.data) {
      donate_list.donatelist.push(new ef_donate_template({
        $data: {
          name: result.data.data[donate_single].user_name,
          amount: result.data.data[donate_single].amount
        }
      }))
    }
    if (donate_list.donatelist.length === 0) {
      donate_list.donatelist.push(new ef_donate_empty_template())
    }
    mdui.mutation()
  } else {
    donate_list.donatelist.empty()
    donate_list.donatelist.push(new ef_donate_error_template())
    mdui.mutation()
  }
}).catch(function(error){
  donate_list.donatelist.push(new ef_donate_error_template())
})

function copyManually(data) {
    copyDialog.open()
    $$('#manual-copy').val(data)
    $$('#dialog-content')[0].scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    })
}

function copyManuallyClose() {
    copyDialog.close()
}

function toTop() {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  })
}

var clipboard = new Clipboard('.btncopy');
clipboard.on('success', function(e) {
    mdui.snackbar({
        message: 'Copied',
        position: 'right-top',
        timeout: 2500
    })
    e.clearSelection()
})
clipboard.on('error', function(e) {
    mdui.snackbar({
        message: 'Can not copy on your browser',
        position: 'right-top',
        timeout: 2500
    })
    copyManually(e.trigger.dataset.clipboardText)
})

var lastscroll = 0
window.addEventListener('scroll', function(e) {
  if (window.scrollY > 50 && lastscroll - window.scrollY > 0) {
    $$('#back-to-top').removeClass('mdui-fab-hide')
  } else {
    $$('#back-to-top').addClass('mdui-fab-hide')
  }
  lastscroll = window.scrollY
})

const paymap = {
  'alipay': 'AliPay (支付宝)',
  'wechat': 'WeChat (微信)',
  'wechat_h5': 'WeChat (微信)',
  'qqpay': 'QQ',
  'paypal': 'PayPal'
}

var dialog_donate_redirect = new mdui.Dialog('#dialog-donate-redirect', { 
  overlay: true,
  history: false,
  modal: true,
  closeOnEsc: false,
  closeOnCancel: false,
  closeOnConfirm: false
})
var dialog_donate_qrcode = new mdui.Dialog('#dialog-donate-qrcode', { 
  overlay: true,
  history: false,
  modal: true,
  closeOnEsc: false,
  closeOnCancel: false,
  closeOnConfirm: false
})
var dialog_donate_success = new mdui.Dialog('#dialog-donate-success', { 
  overlay: true,
  history: false,
  modal: true,
  closeOnEsc: false,
  closeOnCancel: false,
  closeOnConfirm: false
})
window.fixdialogissue = function() {
	window.dispatchEvent(new Event('resize'))
}
$$('#dialog-donate-redirect').on('opened.mdui.dialog', window.fixdialogissue)
$$('#dialog-donate-qrcode').on('opened.mdui.dialog', window.fixdialogissue)
$$('#dialog-donate-success').on('opened.mdui.dialog', window.fixdialogissue)
$$('#copy-dialog').on('opened.mdui.dialog', window.fixdialogissue)

function donate() {
  document.getElementById('donate_name').disabled = true
  document.getElementById('donate_amount').disabled = true
  document.getElementById('donate_method').disabled = true
  document.getElementById('donate_btn').disabled = true
  const params = new URLSearchParams()
  params.append('device_id', 'web')
  params.append('user_name', document.getElementById('donate_name').value)
  params.append('amount', document.getElementById('donate_amount').value)
  params.append('pay_method', document.getElementById('donate_method').value)
  axios.post('https://accounts.extstars.com/api/v2/donation/create', params, {
    headers: {
      'AppId': extstarsAppId,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(function(result) {
    if (result.data.code === 100) {
      if(result.data.data.link != '') {
        dialog_donate_redirect.open()
        window.setTimeout(function(){ location.href = result.data.data.link }, 1800)
      } else {
      	donate_order_id = result.data.data.order_id
      	donate_order_check_token = result.data.data.order_check_token
        dialog_donate_qrcode.open()
        document.getElementById('dialog-donate-qrcode-tips').innerText ='Please use ' + paymap[document.getElementById('donate_method').value] + ' to scan this qrcode to donate. '
        document.getElementById('qrcode').innerHTML = ''
        new QRCode(document.getElementById('qrcode'), result.data.data.qrcode)
        setTimeout(window.donationOrderCheck, 5000)
      }
    } else {
      mdui.snackbar({message: 'Input Error.', buttonText: 'Dismiss'})
      document.getElementById('donate_name').disabled = false
      document.getElementById('donate_amount').disabled = false
      document.getElementById('donate_method').disabled = false
      document.getElementById('donate_btn').disabled = false
    }
  }).catch(function(error) {
    mdui.snackbar({message: 'An error has occurred.', buttonText: 'Dismiss'})
    document.getElementById('donate_name').disabled = false
    document.getElementById('donate_amount').disabled = false
    document.getElementById('donate_method').disabled = false
    document.getElementById('donate_btn').disabled = false
  })
}

var donationOrderCheckTimes = 0
var donate_order_id = ''
var donate_order_check_token = ''
window.donationOrderCheck = function() {
  if (donationOrderCheckTimes <= 15) {
  	const params_ocheck = new URLSearchParams()
    params_ocheck.append('order_id', donate_order_id)
    params_ocheck.append('order_check_token', donate_order_check_token)
    axios.post('https://accounts.extstars.com/api/v2/order/check', params_ocheck, {
      headers: {
        'AppId': extstarsAppId,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function(result) {
        if (result.data.code === 100) {
          if (result.data.data.is_paid === 0) {
          	donationOrderCheckTimes = donationOrderCheckTimes + 1
            setTimeout(window.donationOrderCheck, 5000)
          } else {
            donateSuccess()
          }
        } else {
          mdui.snackbar('An error occurred.')
        }
    }).catch(function() {
        mdui.snackbar('An error occurred.')
    })
  }
}

function donateSuccess() {
    dialog_donate_qrcode.close()
    dialog_donate_success.open()
    window.setTimeout(function(){ window.location.href = window.location.origin + '/?amount=' + document.getElementById('donate_amount').value }, 1800)
}

var amount = (new URL(window.location.href)).searchParams.get('amount')
if(amount != null) {
    mdui.snackbar({message: 'Thank you for your donate!', buttonText: 'Dismiss'})
}