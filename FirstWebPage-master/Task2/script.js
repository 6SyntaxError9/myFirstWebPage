document.getElementById("form").addEventListener("submit", function(event) 
{
    event.preventDefault();

    const nameField = document.getElementById("name");
    const commentField = document.getElementById("comment");
    const selectedGender = document.querySelector("input[name='gender']:checked");

    if (!nameField.value || !commentField.value || !selectedGender) 
    {
      let errorMessage = "All fields are compulsory.";
      
      if (!nameField.value) 
      {
        nameField.focus();
      } else if (!commentField.value) 
      {
        commentField.focus();
      }

      alert(errorMessage);
    } else 
    {
      
    }
});

  const genderRadios = document.querySelectorAll("input[name='gender']");
  genderRadios.forEach(radio => 
    {
      radio.addEventListener("click", function() 
      {
        if (this.checked) 
        {
          genderRadios.forEach(otherRadio => 
            {
              if (otherRadio !== this) 
                {
                  otherRadio.checked = false;
                }
            });
        }
      });
    });