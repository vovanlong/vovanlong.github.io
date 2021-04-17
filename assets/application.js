$(document).ready(function () {
  window.data = [
    {
      name: 'Minh Tang',
      room: '101',
      title: 'Gia đình anh Tăng Quốc Minh',
      team: 'doraemon'
    },
    {
      name: 'Ha Le',
      room: '102',
      title: 'Gia đình chị Hà',
      team: 'nobita'
    },
    {
      name: 'Phuong Vo',
      room: '201',
      title: 'Gia đình anh Phương',
      team: 'doraemon'
    },
    {
      name: 'Anh Le',
      room: '202',
      title: 'Gia đình anh Quỳnh Anh',
      team: 'shizuka'
    },
    {
      name: 'Anh Luu',
      room: '203',
      title: 'Anh Lưu Tuấn Anh',
      team: 'nobita'
    },
    {
      name: 'Anh Tran',
      room: '203',
      title: 'Anh Trần Văn Tuấn Anh'
    },
    {
      name: 'Anh Nguyen',
      room: '204',
      title: 'Gia đình anh Nguyễn Anh',
      team: 'shizuka'
    },
    {
      name: 'Luan Dang',
      room: '301',
      title: 'Gia đình anh Luân',
      team: 'shizuka'
    },
    {
      name: 'Luan Dang Family',
      room: '302',
      title: 'Gia đình anh em anh Luân',
      team: 'doraemon'
    },
    {
      name: 'Lan Le Hoang',
      room: '205',
      title: 'Lê Hoàng Lân',
      team: 'nobiba'
    },
    {
      name: 'Thuan Nguyen',
      room: '205',
      title: 'Nguyễn Văn Thuận',
      team: 'nobiba'
    },
    {
      name: 'Duy Dinh Van',
      room: '206',
      title: 'Đinh Văn Duy',
      team: 'shizuka'
    },
    {
      name: 'Tung Nguyen Tat',
      room: '206',
      title: 'Anh Nguyễn Tất Tùng',
      team: 'nobita'
    },
    {
      name: 'Quan Doan',
      room: '206',
      title: 'Đoàn Trung Quân',
      team: 'shizuka'
    },
    {
      name: 'Long La',
      room: '207',
      title: 'La Hoàng Long',
      team: 'shizuka'
    },
    {
      name: 'Bao Van',
      room: '207',
      title: 'Vân Phú Bảo',
      team: 'doraemon'
    },
    {
      name: 'Tung Nguyen',
      room: '208',
      title: 'Nguyễn Thanh Tùng',
      team: 'nobita'
    },
    {
      name: 'Long Vo',
      room: '208',
      title: 'Võ Văn Long',
      team: 'BTC'
    },
    {
      name: 'Ninh Le',
      room: '208',
      title: 'Lê Văn Ninh',
      team: 'nobita'
    },
    {
      name: 'Huy Nguyen',
      room: '303',
      title: 'Huy Nguyễn',
      team: 'doraemon'
    },
    {
      name: 'Tri Dang',
      room: '303',
      title: 'Trí Đặng',
      team: 'doraemon'
    },
    {
      name: 'Huy Dang',
      room: '303',
      title: 'Đặng Quang Nhật Huy'
    },
    {
      name: 'Le Pham',
      room: '304',
      title: 'Phạm Hồng Lê',
      team: 'BTC'
    },
    {
      name: 'Thuong Ngo',
      room: '304',
      title: 'Ngô Thương',
      team: 'nobita'
    },
    {
      name: 'Trang Chu',
      room: '304',
      title: 'Chu Thị Quỳnh Trang',
      team: 'shizuka'
    },
    {
      name: 'Linh Chau',
      room: '304',
      title: 'Châu Võ Thuỳ Linh',
      team: 'doraemon'
    }
  ];

  var user = localStorage.getItem('user');
  var user = JSON.parse(user);
  if(user) {
    var url = window.location.href;
    var urlAray = url.split('/');
    if(!urlAray.includes('info.html')){
      window.location.href = '/info.html';
    }else{
      
      $('.js--username').text(user.name);
      $('.js--room').text(user.room);
      $('.js--title-welcome').text('Xin chào ' + user.title);
      $('.js--team').text(user.team)
    }
  } else {
    var url = window.location.href;
    var urlAray = url.split('/');
    if(urlAray.includes('info.html')){
      window.location.href = '/'
    }
  }

  $(document).on('click', '.js--sign-out', function(){
    localStorage.removeItem('user');
    window.location.href = '/info.html';
  });

  $(document).on('click', '.js--search-user', function () {
    window.user = data.find(function(user) {
      return user.name == $('.js--input-username').val();
    });
    var counter = 0;
    var c = 0;
    $('.js--search-user-wrapper').removeClass('c-search-user').addClass('hidden');
    $('.js--loading-screen').addClass('loading-page');
    var i = setInterval(function(){
        $(".loading-page .counter h3").html(c + "%");
        $(".loading-page .counter hr").css("width", c + "%");
        $(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");
  
      $(".loading-page .counter h1.color").css("width", c + "%");
      counter++;
      c++;
        
      if(counter == 101) {
        localStorage.setItem('user', JSON.stringify(window.user));
        delete window.user;

        clearInterval(i);
        window.location.href = '/info.html';
      }
    }, 50);
  });

  
});
