using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace HPTelecom.Domain.Notification
{
    public class Output<T>
    {
        private readonly List<ErrorItem> _errorItems;

        public T Result { get; set; }
        public bool IsValid => _errorItems.Count == 0;

        public Output()
        {
            _errorItems = new List<ErrorItem>();
        }

        public Output(T @object) : this()
        {
            Result = @object;
        }

        public void AddError(string key, string message)
        {
            _errorItems.Add(new ErrorItem(key, message));
        }

        public static implicit operator ValidationProblemDetails(Output<T> output)
        {
            var modelstate = new ModelStateDictionary();

            foreach (var item in output._errorItems)
                modelstate.AddModelError(item.Key, item.Message);

            return new ValidationProblemDetails(modelstate);
        }

        public class ErrorItem
        {
            public string Key { get; set; }
            public string Message { get; set; }

            public ErrorItem(string key, string message)
            {
                Key = key;
                Message = message;
            }
        }
    }
}
