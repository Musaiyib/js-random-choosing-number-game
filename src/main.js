// let words = ['Study', 'Alqalam', 'University', 'Katsina', 'State', 'Computer', 'Science', 'Student', 'Natural', 'Applied', 'Lectures', 'Mass', 'Communication'];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let bgs = ['blue', 'yellow', 'red', 'indigo', 'violet', 'brown', 'aqua'];
let bgsa = ['DeepPink', 'OrangeRed', 'DarkKhaki', 'Lime', 'Olive', 'Navy', 'Chocolate'];

function gentext(){
    
    setInterval((click) => {
        var rand = document.getElementById('output');

        var btn = document.getElementById('#btn');

        var bg = document.getElementById('bg');

        rand.innerHTML = nums[Math.floor(Math.random() * nums.length)];

        let bcolor = bg.innerHTML = bgs[Math.floor(Math.random() * bgs.length)];

        

        if (bcolor == 'blue') {

            document.body.style.color = 'red';

        } else if(bcolor == 'red'){

            document.body.style.color = 'blue';

        } else {

            document.body.style.color = '';

        }
        
        document.body.style.backgroundColor = bcolor;
        btn.color = bgsa[Math.floor(Math.random() * bgsa.length)];
    }, 3000);
    
}


