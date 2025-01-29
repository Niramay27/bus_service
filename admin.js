const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

document.getElementById('downloadPdf').addEventListener('click', function() {
    // Select the element you want to convert to PDF
    const element = document.documentElement; // This selects the entire page

    // Options for the PDF
    const options = {
      margin:       10,
      filename:     'webpage.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate the PDF
    html2pdf().from(element).set(options).save();
  });

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown_bus-toggle');
    const dropdownMenu = document.querySelector('.dropdown_bus-menu');
  
    // Toggle dropdown visibility
    dropdownToggle.addEventListener('click', function () {
      dropdownMenu.classList.toggle('show');
    });
  
    // Update button text when an item is selected
    dropdownMenu.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        // Get the text of the clicked link
        const selectedItemText = event.target.textContent;
        // Update the button text
        dropdownToggle.textContent = selectedItemText;
        // Hide the dropdown menu
        dropdownMenu.classList.remove('show');
      }
    });
  
    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (event) {
      if (!event.target.matches('.dropdown_bus-toggle')) {
        if (dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.getElementById('openPopup');
    const popupModal = document.getElementById('popupModal');
    const closeButton = document.querySelector('.close');
    const submitButton = document.getElementById('submitText');
    const textInput = document.getElementById('textInput');
  
    // Open the popup
    openPopupButton.addEventListener('click', function () {
      popupModal.style.display = 'flex';
    });
  
    // Close the popup
    closeButton.addEventListener('click', function () {
      popupModal.style.display = 'none';
    });
  
    // Submit the text
    submitButton.addEventListener('click', function () {
      const text = textInput.value;
      if (text) {
        alert(`You entered: ${text}`);
        popupModal.style.display = 'none';
        textInput.value = ''; // Clear the input
      } else {
        alert('Please enter some text!');
      }
    });
  
    // Close the popup if clicked outside the modal
    window.addEventListener('click', function (event) {
      if (event.target === popupModal) {
        popupModal.style.display = 'none';
      }
    });
  });


document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
  
    // Toggle dropdown visibility
    dropdownButton.addEventListener('click', function () {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
  
    // Remove entry when remove button is clicked
    dropdownMenu.addEventListener('click', function (event) {
      if (event.target.classList.contains('removeButton')) {
        const listItem = event.target.parentElement;
        listItem.remove();
      }
    });
  
    // Close dropdown if clicked outside
    window.addEventListener('click', function (event) {
      if (!event.target.matches('#dropdownButton')) {
        dropdownMenu.style.display = 'none';
      }
    });
  });