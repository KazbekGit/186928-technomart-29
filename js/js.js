window.onload = function() {
 
    let modalUserData = document.getElementById('modal-userData');
    let sendUserMessage = document.getElementById('send-user-message');
    let sendUserMessageClose = document.getElementById('modal-userData-close');
   
    let smallMap = document.getElementById('small-map');
    let modalBigMap = document.getElementById('big-map');
    let modalBigMapClose = document.getElementById('modal-map-close');

    modalBigMap.style.visibility="hidden";
    modalUserData.style.visibility='hidden';
   
    sendUserMessage.onclick = function() {
        modalUserData.style.visibility='visible';
    }
   
    sendUserMessageClose.onclick = function() {
      modalUserData.style.visibility='hidden';
    }

    smallMap.onclick = function() {
        modalBigMap.style.visibility="visible";
    }

    modalBigMapClose.onclick = function() {
        modalBigMap.style.visibility="hidden";
    }
    


}