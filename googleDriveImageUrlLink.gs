/**
* google driveの画像URLはそのままだとimageタグなどの画像URLとして使えないので、使える形式に変換します。
*/
function googleDriveImageUrlLink(url) {
  var regex = /^https:\/\/drive\.google\.com\/file\/d\/(.+?)\/view\?usp=share_link$/;
  var match = url.match(regex);

  if (match) {
    var fileId = match[1];
    return 'https://drive.google.com/uc?id=' + fileId;
  } else {
    return url;
  }
}

/**
* 使用例
*/
function googleDriveImageUrlLinkTest() {
  console.log(googleDriveImageUrlLink("https://drive.google.com/file/d/1gVYhf68MV9COEkhvSw0_xJn9NVIuIYWi/view?usp=share_link"));
}
