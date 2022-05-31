
////מחלקת מוצר
// export default class Product {
//    static #countId = 0;
//    constructor(prodName, category, price, Quentity) {
//        this.prodName = prodName;
//        this.category = category;
//        this.price = price;
//        this.Quentity = Quentity;
//        Product.#countId++;
//        this.prodId = Product.#countId;
//    }
//    toString() {
//        return (` שם הבגד:  ${this.prodName}   קטגוריה:  ${this.category}  כמות במלאי:  ${this.Quentity}  מחיר:  ${this.price}`);
//    }

//    //מחיקה מהמלאי
//    removeFromStock = function() {
//            this.Quentity--;

//        } //הוספה למלאי
//    addToStock = function() {
//        this.Quentity++;

//    }
//    editProd = () => {
//        console.log("in edit prod")
//        console.log(this)
//        document.getElementById('edit-h2').innerHTML = "עריכת מוצר: " + this.prodName;
//        let btn = document.getElementById('show-edit');
//        btn.classList.remove('hide');
//        console.log(this.category)
//        document.querySelector('input[name="prodpriceInput1"]').value = this.price;
//        document.querySelector('input[name="QuentityInput1"]').value = this.Quentity;
//        document.querySelector('input[name="prodNameInput1"]').value = this.prodName;
//        let btnSave = document.querySelector(".save");
//        let btnCancel = document.querySelector(".cancel");
//        btnSave.addEventListener("click", () => {
//            if (document.querySelector('input[name="prodNameInput"]').value != null) {
//                this.price = document.querySelector('input[name="prodpriceInput1"]').value;
//                var e = document.getElementById("category-edit");
//                var text = e.options[e.selectedIndex].text;
//                this.category = text;
//                this.Quentity = document.querySelector('input[name="QuentityInput1"]').value;
//                this.prodName = document.querySelector('input[name="prodNameInput1"]').value;
//                document.querySelector('.list-product').innerHTML = "";
//                shop.items.forEach(c => c.ShowProduct(c))
//            }
//            btn.classList.add('hide');
//        });
//        btnCancel.addEventListener("click", () => {
//            btn.classList.add('hide');
//        })


//    }

//    // הצגת מוצר על המסך

//    ShowProduct = function(prod) {
//        let section = document.querySelector(".list-product");
//        section.insertAdjacentHTML("beforeend", `<div id=${prod.prodId} class="row">
//       <label class="description">${this.toString()}
//       <div class="buttons">
//       <button id="editProd" class="edit"  > עריכה </button> </div>  </label> </div>`)
//        let currentBtn = document.getElementById(`${prod.prodId}`);
//        console.log(currentBtn)
//        currentBtn.addEventListener("click", this.editProd);
//    }
//}