
        function validarFormulario() {
            
            var usuario = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var textArea = document.getElementById('contact-textarea').value;
                                    
                if ((usuario == null ) || (usuario == "")){                    
                    var MsgBox = document.getElementById('msg-box');
                        MsgBox.removeAttribute('class');
                    var att = document.createAttribute('class');
                        att.value = "msg-box";
                        MsgBox.setAttributeNodeNS(att);
                    var Msg = document.getElementById('status-msg');
                        Msg.setAttribute('class','status-msg');
                        Msg.textContent = "ESCRIBA SU NOMBRE";
                        setTimeout(function(){
                                MsgBox.removeAttribute('class');
                            var att = document.createAttribute('class');
                                att.value = "msg-box vanish";
                                MsgBox.setAttributeNodeNS(att);                                        
                        },1000);
                        
                        
                    return false;
                    } else if ( (email.length < 10) || (email === null) || (email === "") || (/[[ñáé}!#í=¡óú;'%¿$|&,:^><\/+\s]/i.test(email)) ) {
                        var MsgBox = document.getElementById('msg-box');
                            MsgBox.removeAttribute('class');
                        var att = document.createAttribute('class');
                            att.value = "msg-box";
                            MsgBox.setAttributeNodeNS(att);
                        var Msg = document.getElementById('status-msg');
                            Msg.setAttribute('class','status-msg');
                            Msg.textContent = "ESCRIBA UN EMAIL VALIDO";
                            setTimeout(function(){
                                MsgBox.removeAttribute('class');
                            var att = document.createAttribute('class');
                                att.value = "msg-box vanish";
                                MsgBox.setAttributeNodeNS(att);                                        
                            },1000);                                 
                               
                                return false;
                                } else {
                                    document.getElementById('name').value= "";
                                    document.getElementById('email').value = "";
                                    document.getElementById('contact-textarea').value = "";                                    
                                                                                                          
                                var MsgBox = document.getElementById('msg-box');
                                    MsgBox.removeAttribute('class');
                                var att = document.createAttribute('class');
                                    att.value = "msg-box";
                                    MsgBox.setAttributeNodeNS(att);
                                var Msg = document.getElementById('status-msg');
                                    Msg.setAttribute('class','status-msg contact-send-msg');
                                    Msg.textContent = "MENSAJE ENVIADO";
                                    setTimeout(function(){
                                            MsgBox.removeAttribute('class');
                                        var att = document.createAttribute('class');
                                            att.value = "msg-box vanish";
                                            MsgBox.setAttributeNodeNS(att);                                        
                                    },1000);      
                                        
                                    return true;
                                }
        }