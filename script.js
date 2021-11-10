console.log('JavaScript is loaded.');

const menuToggle = document.querySelector('.menu');

menuToggle.addEventListener('click',() => 
    {
        const myHeader = document.querySelector('header');
        const myMenu  = document.createElement('div');
        myMenu.classList.add("menuDiv");

        const xButton = document.createElement('a');
        const xButtonText = document.createTextNode("X");
        xButton.classList.add("xButtonStyle");

        const menuList = document.createElement('ul');
        menuList.classList.add("menuListStyle");

        const menuItem1 = document.createElement('li');
        const menuItem2 = document.createElement('li');
        const menuItem3 = document.createElement('li');
        const menuItem4 = document.createElement('li');

        const menuChoice1 = document.createElement('a');
        const menuChoice2 = document.createElement('a');
        const menuChoice3 = document.createElement('a');
        const menuChoice4 = document.createElement('a');

        const aText1 = document.createTextNode("Play Online");
        const aText2 = document.createTextNode("Play On-site");
        const aText3 = document.createTextNode("The Story");
        const aText4 = document.createTextNode("Contact us");

        menuChoice1.href = "#";
        menuChoice2.href = "#";
        menuChoice3.href = "#";
        menuChoice4.href = "#";

        menuChoice1.style.textDecoration = 'none';
        menuChoice2.style.textDecoration = 'none';
        menuChoice3.style.textDecoration = 'none';
        menuChoice4.style.textDecoration = 'none';

        menuChoice1.style.color = 'white';
        menuChoice2.style.color = 'white';
        menuChoice3.style.color = 'white';
        menuChoice4.style.color = 'white';

        myHeader.appendChild(myMenu);
       
        myMenu.appendChild(xButton);
        xButton.appendChild(xButtonText);

        myMenu.appendChild(menuList);

        menuList.appendChild(menuItem1);
        menuList.appendChild(menuItem2);
        menuList.appendChild(menuItem3);
        menuList.appendChild(menuItem4);

        menuItem1.appendChild(menuChoice1);
        menuItem2.appendChild(menuChoice2);
        menuItem3.appendChild(menuChoice3);
        menuItem4.appendChild(menuChoice4);

        menuChoice1.appendChild(aText1);
        menuChoice2.appendChild(aText2);
        menuChoice3.appendChild(aText3);
        menuChoice4.appendChild(aText4);

        menuToggle.style.display = 'none'; 
        
        xButton.addEventListener('click',() => 
            {
                menuToggle.style.display = 'block';
                myHeader.removeChild(myMenu);
            }
        );
    }
);

