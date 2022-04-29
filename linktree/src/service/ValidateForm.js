export default function ValidateForm(values) {
    let errors = {};
  
    Object.keys(values).forEach(item => {
        if(typeof(values[item].Errors) != "undefined"){
           if(values[item].Errors.length > 0)
              errors[item] = values[item].Errors[0].ErrorMessage;

        }else if(typeof(values[item]) != "undefined"){
           errors[item] = values[item][0];
        }
    });

  return errors;
}