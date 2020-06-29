const upper_layer = "upper_layer";
const condition_choice = "choice";
const dispatcher_navigation = "dispatcher_navigation";
const laverage_buttons = "laverage_buttons";
const error_notification = "error_notification";
const hidden = "hidden";


function change_layer(element_id)
{
    if (element_id == "motivation") {
        let body = document.getElementsByTagName("body")[0];
        body.classList.remove("overflow_hidden");
    } else {
        let body = document.getElementsByTagName("body")[0];
        body.classList.add("overflow_hidden");
    }

    let elements_with_upper_layer = document.getElementsByClassName(upper_layer);

    try {
        for (let i=0; i<elements_with_upper_layer.length; ++i)
            elements_with_upper_layer[i].classList.remove(upper_layer);
    
        let desired_layer = document.getElementById(element_id);
        desired_layer.classList.add(upper_layer);
    } catch (TypeError) {
        let error_element = document.getElementById(error_notification);
        error_element.classList.remove(hidden);

        setTimeout(() => {
            error_element.classList.add(hidden);
        }, 10000);
    }
}

function choose()
{   
    let choice = document.getElementById(condition_choice).value.toLowerCase();
    change_layer(choice);
}

function display_pages()
{
    let lb = document.getElementById(laverage_buttons);
    if (lb.classList.contains(hidden)) {
        lb.classList.remove(hidden);
    } else {
        lb.classList.add(hidden);
    }
}