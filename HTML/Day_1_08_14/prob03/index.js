      function ValidateForm(frm) {
        if (frm.Name.value == "") {
          alert("Name is required.");
          frm.Name.focus();
          return false;
        }
        if (frm.FromEmailAddress.value == "") {
          alert("Email address is required.");
          frm.FromEmailAddress.focus();
          return false;
        }
        
        if (frm.Comments.value == "") {
          alert("Please enter comments or questions.");
          frm.Comments.focus();
          return false;
        }
        return true;
      }