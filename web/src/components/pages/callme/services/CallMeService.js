import React,{useState} from "react";
import Api from "../../../../services/Api";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

const CallMeService = (callback, validate) => {

    const [errors, setErrors] = useState([]);
    const [plans, setPlans] = useState([])

    const [values, setValues] = useState({
        Name: "",
        Telephone:"",
        Cep : "",
        PlanId : "",
        Text : ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
    };

    const handlePlans = async () => {
        await Api.get("Web/GetPlans/" + 50)
        .then((response) =>{
            setPlans(response.data);
        })
        .catch((err) => {

        });
    }

    const handleSendMail = async e => {
        e.preventDefault()

        const form_data = new FormData();
        form_data.append('Name', values.Name);
        form_data.append('Telephone', values.Telephone);
        form_data.append('Cep', values.Cep);
        form_data.append('PlanId', values.PlanId);
        form_data.append('Text', values.Text);

        await Api.post("/Web/SendPurchaseRequestMail", form_data)
        .then((response) =>{
            
        })
        .catch((err) => {
            var errors = err.response.data.errors;
            setErrors(validate(errors));
        });
    }

    return { 
        handleChange, 
        handleSendMail,
        handlePlans,
        values, 
        errors,
        plans
    };

}

export default CallMeService;