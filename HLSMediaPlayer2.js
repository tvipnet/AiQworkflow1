document.addEventListener("DOMContentLoaded",()=>{var e=document.getElementById("Bvideo");var t="https://dfflvukqjg5l4.cloudfront.net/leo480p_no_audio.m3u8";const n={};try{if(Hls.isSupported()){var o=new Hls;o.loadSource(t);e.controlsList="noplaybackrate";e.disablePictureInPicture=true;o.attachMedia(e);i(o)}}catch(l){window.alert(l)}function d(n){window.hls.levels.forEach((e,t)=>{if(e.height===n){window.hls.currentLevel=t}})}function i(e){window.hls=e}});