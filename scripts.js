function adddosaToList()
{
    alert("See Bill details in the Bottom")
    var name=document.getElementById('dosa').textContent
    var get_input=document.getElementById('dosainput').value 
    var bill=Number(get_input)*45;
    console.log(bill)
    var item={       
        dosa:bill
    }
    ordered_list.push(item)
    renderDOM()
    
}
function addidlytolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('idly').textContent
    var get_input=document.getElementById('idlyinput').value 
    var bill=Number(get_input)*30;
    console.log(bill)
    var item={       
        idly:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function addvadatolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('vada').textContent
    var get_input=document.getElementById('vadainput').value 
    var bill=Number(get_input)*30;
    console.log(bill)
    var item={       
        Vada:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function addpongaltolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('pongal').textContent
    var get_input=document.getElementById('pongalinput').value 
    var bill=Number(get_input)*50;
    console.log(bill)
    var item={       
        Pongal:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function addravatolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('rava').textContent
    var get_input=document.getElementById('ravainput').value 
    var bill=Number(get_input)*35;
    console.log(bill)
    var item={       
        RavaKitchedi:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function addchapatitolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('chapati').textContent
    var get_input=document.getElementById('chapatiinput').value 
    var bill=Number(get_input)*40;
    console.log(bill)
    var item={       
        Chapati:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function addsambatolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('samba').textContent
    var get_input=document.getElementById('sambainput').value 
    var bill=Number(get_input)*50;
    console.log(bill)
    var item={       
        SambaRava:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function addpooritolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('poori').textContent
    var get_input=document.getElementById('pooriinput').value 
    var bill=Number(get_input)*45;
    console.log(bill)
    var item={       
        Poori:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function addsetdosatolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('setdosa').textContent
    var get_input=document.getElementById('setdosainput').value 
    var bill=Number(get_input)*30;
    console.log(bill)
    var item={       
        SetDosa:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function addmasaldosatolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('masaldosa').textContent
    var get_input=document.getElementById('masaldosainput').value 
    var bill=Number(get_input)*50;
    console.log(bill)
    var item={       
        MasalDosa:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function adduthappamtolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('uthappam').textContent
    var get_input=document.getElementById('uthappaminput').value 
    var bill=Number(get_input)*50;
    console.log(bill)
    var item={       
        Uthappam:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function addravadosatolist()
{   
    alert("See Bill details in the Bottom")
    var name=document.getElementById('ravadosa').textContent
    var get_input=document.getElementById('ravainput').value 
    var bill=Number(get_input)*50;
    console.log(bill)
    var item={       
        RavaDosa:bill
    }
    ordered_list.push(item)
    renderDOM()
}
function renderDOM()
{
    var type=document.getElementById('target')
    type.innerHTML=" "
    var container=document.createElement('div')
    container.setAttribute('class','left')
    container.setAttribute('id','cont')
    for(var i=0;i<ordered_list.length;i++)
    {
        var item=ordered_list[i]
        var div=document.createElement('div')
        div.setAttribute('class','clear')
        div.setAttribute('class','padding')
        var p=document.createElement('p')
        p.setAttribute('class','left')            
        p.textContent=Object.keys(item)+"  "+Object.values(item)
        var btn=document.createElement('button')
        btn.setAttribute('class','right remove')        
        btn.textContent="remove"
        btn.addEventListener('click',remove_item)
        div.append(p,btn)
        container.append(div)
    }
    type.append(container)
}
function remove_item()
{
    console.log("start removing item")

}
function bill_generator()
{
    var target=document.getElementById('bill')
    var container=document.createElement('div')
    var total_amount=0
    for(var i=0;i<ordered_list.length;i++)
    {
        var item=ordered_list[i]
        var div=document.createElement('div')
        var p=document.createElement('p')
        p.setAttribute('class','line')
        p.textContent=Object.keys(item)+"::"+Object.values(item)
        total_amount=total_amount+Number(Object.values(item))
        div.append(p)
        container.append(div)
    }
    var br=document.createElement('br')
    var gst=Number(total_amount)*0.15
    var p1=document.createElement('p')
    p1.setAttribute('class','line')
    p1.textContent="GST"+"::"+ " " +Number(gst)
    var p2=document.createElement('p')
    p2.setAttribute('class','line')
    var bill_amount=total_amount+gst
    p2.textContent="Total Amount"+"::"+" "+bill_amount
    var checkout=document.createElement('button')
    checkout.textContent="Proceed to Checkout"
    div.append(br,p1,p2,checkout)
    container.append(div)
    target.append(container)

}

window.addEventListener('load',function()
{
    var btn=document.getElementById('dosabutton')
    btn.addEventListener('click',adddosaToList)   

})
window.addEventListener('load',function()
{
    var btn_idly=document.getElementById('idlybutton')
    btn_idly.addEventListener('click',addidlytolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('vadabutton')
    btn_vada.addEventListener('click',addvadatolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('pongalbutton')
    btn_vada.addEventListener('click',addpongaltolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('ravabutton')
    btn_vada.addEventListener('click',addravatolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('ravadosabutton')
    btn_vada.addEventListener('click',addravadosatolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('chapatibutton')
    btn_vada.addEventListener('click',addchapatitolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('sambabutton')
    btn_vada.addEventListener('click',addsambatolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('pooributton')
    btn_vada.addEventListener('click',addpooritolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('setdosabutton')
    btn_vada.addEventListener('click',addsetdosatolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('masaldosabutton')
    btn_vada.addEventListener('click',addmasaldosatolist)   

}
)
window.addEventListener('load',function()
{
    var btn_vada=document.getElementById('uthappambutton')
    btn_vada.addEventListener('click',adduthappamtolist)   

}
)
window.addEventListener('load',function()
{
  var generate_bill=document.getElementById('generate_button')
  generate_bill.addEventListener('click',bill_generator)
})


