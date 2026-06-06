// 通用下载方法

// 标签切换逻辑
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-box');
tabs.forEach(item=>{
  item.onclick = function(){
    let id = this.dataset.target;
    tabs.forEach(t=>t.classList.remove('active'));
    panels.forEach(p=>p.classList.remove('show'));
    this.classList.add('active');
    document.getElementById(id).classList.add('show');
  }
})
/* 下面放你原来所有下载点击函数：
more_codememorys_binrary() ...等等全部原有js */


function downloadFile(url, fileName) {
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// CodeMemorys
function more_codememorys_binrary() {
  window.location.href = "https://pan.quark.cn/s/0013926b5fa5?pwd=smHG";
}
function more_codememorys_sourse() {
  downloadFile("src/src-codememorys.tar", "CodeMemorys_Source.zip");
}

// MetalCalc
function more_matalcalc_binrary() {
  window.location.href = "https://pan.quark.cn/s/79cafbf19744?pwd=iLe1";
}

// ScanPrice
function more_scanprice_binrary() {
 window.location.href = "https://pan.quark.cn/s/36e7293d6d41?pwd=ggPJ";
}
function more_scanprice_sourse() {
  downloadFile("src/src-scanprice.zip", "ScanPrice_Source.zip");
}

// ChartOfQuestion
function more_chart_binrary() {
  window.location.href = "https://pan.quark.cn/s/1e60a7a0054d?pwd=JRvv";
}
function more_chart_sourse() {
  downloadFile("src/src-chartofquestion.zip", "ChartOfQuestion_Source.zip");
}

function more_fixman_at_format(){
  window.location.href = "Download_fixman/typekey.html";
}