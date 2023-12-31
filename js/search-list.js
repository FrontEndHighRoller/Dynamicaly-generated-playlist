const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if ( !search){ // 2.
  message = `<strong>In stock:</strong> ${inStock.join(" ,")}`;

} else if ( inStock.includes(search.toLowerCase() )){ // 3.
  message = `Yes we have <strong>${search}</strong>. Its #${inStock.indexOf(search.toLowerCase() )+1} on the list`; // 1, 3
}else{
  message = `Sorry, we do not have <strong>${search}</strong>`;
}

document.querySelector("main").innerHTML = `<p>${message}</p>`;



/* notes:
1. If user type pizza to the prompt dialog it will show that it has number #0 on the stock, it doenst look profesionnal. 
To achieve that we add number +1 behind. This will show pizza as number 1 in the list.
Example: Its #${inStock.indexOf(search )+1}

2. Prevent undesirable outcome such a "null" when user press cancel or confirm prompt dialog with no text.
To achieve that we have to add if statement that is considered false. 
Example: if (!search)

3. if the user enter instead of piza, Pizza or PIZZA it will valuate to false.
To prevent that we have to add property .toLowerCase() when user type something to prompt dialog.
Example: else if ( inStock.includes(search.toLowerCase() ))
Example: message = `Yes we have <strong>${search}</strong>. Its #${inStock.indexOf(search.toLowerCase() )+1} on the list`;





*/