//import
//    Product
// from './Product'
//import  Manager  from './Manager'
//// מחלקת חנות
// export default class Shop {
//    items = [];
//    _length = 5;
//    _manager;
//    constructor() {
//            this.items = [];
//            this._length = 5;
//            this.manager = new Manager();

//        }
//        //חיפוש מוצר לפי מחיר
//    priceSearch = function() {
//            let price = document.querySelector('input[name="price"]').value;
//            findProduct = shop.items.filter(el => el.price == price);
//            document.querySelector('.list-product').innerHTML = findProduct

//        }
//        //הוספת מוצר
//    addProduct =
//        function() {
//            let name = document.querySelector('input[name="prodNameInput"]').value;
//            var e = document.getElementById("category-add");
//            let category = e.options[e.selectedIndex].text;
//            let price = document.querySelector('input[name="prodpriceInput"]').value;
//            let qty = document.querySelector('input[name="QuentityInput"]').value;
//            let p = new Product(name, category, price, qty);
//            this._length += 1;
//            console.log(this._length);
//            console.log(p.prodId);
//            this.items[this._length - 1] = p
//            console.log(p)
//            console.log(this.items)
//            document.querySelector('.list-product').innerHTML = "";
//            this.items.forEach(c => c.ShowProduct(c))
//                //  buttonDom();

//        }
//        // הוספת מוצרי ברירת מחדל
//    addItems = function() {
//            shop.items[0] = new Product("חולצת פולו", "בגדי גברים", 127, 19)
//            shop.items[1] = new Product("עניבה כחולה", "בגדי גברים", 42, 23)
//            shop.items[2] = new Product("שמלה ורודה טומי", "בגדי ילדים", 150, 22)
//            shop.items[3] = new Product("שמלת בייבי ורודה", "בגדי ילדים", 95, 4)
//            shop.items[4] = new Product("גרבי רגל", "בגדי נשים", 18, 0)
//        }
//        //חיפוש מוצר לפי מחיר
//    priceSearch = function() {
//            let price = document.querySelector('input[name="price"]').value;
//            let findProduct = shop.items.filter(el => el.price == price);
//            document.querySelector('.list-product').innerHTML = "";
//            findProduct.forEach(el => {
//                el.ShowProduct(el);
//            })
//            console.log(findProduct);
//        }
//        //חיפוש מוצר לפי שם
//    nameSearch = function() {
//            let prodname = document.getElementById('nameprod1').value;
//            console.log(prodname)
//            let findProduct = shop.items.filter(el => el.prodName === prodname);
//            document.querySelector('.list-product').innerHTML = "";
//            findProduct.forEach(el => {
//                el.ShowProduct(el);
//            })
//            console.log(findProduct);
//        }
//        // חיפוש לפי קרוב לאזול מהמלאי
//    almostFinishStock = function() {
//            let findProduct = shop.items.filter(el => el.Quentity < 5);
//            document.querySelector('.list-product').innerHTML = "";
//            findProduct.forEach(el => {
//                el.ShowProduct(el);
//            })
//            console.log(findProduct);
//        }
//        // אזל מהמלאי
//    finishSearchStock = function() {
//            let findProduct = shop.items.filter(el => el.Quentity == 0);
//            document.querySelector('.list-product').innerHTML = "";
//            findProduct.forEach(el => {
//                el.ShowProduct(el);
//            })
//            console.log(findProduct);
//        }
//        //הורדה מהמלאי
//    removeFromStockShop = function() {
//            var name = document.querySelector('input[name=prodNameInput1]').value;
//            let item = shop.items.filter(c => c.prodName == name);
//            item.forEach(c => c.removeFromStock());
//            document.querySelector('.list-product').innerHTML = "";
//            shop.items.forEach(c => c.ShowProduct(c));
//        }
//        // הוספה למלאי
//    addToStockShop = function() {
//            var name = document.querySelector('input[name=prodNameInput1]').value;
//            let item = shop.items.filter(c => c.prodName == name);
//            item.forEach(c => c.addToStock());
//            document.querySelector('.list-product').innerHTML = "";
//            shop.items.forEach(c => c.ShowProduct(c));
//        }
//        // חיפוש לפי קטגוריה
//    categorySearch = function() {
//            var e = document.getElementById("manager-select");
//            var value = e.options[e.selectedIndex].value; // get selected option value
//            var text = e.options[e.selectedIndex].text;
//            console.log(text)
//            let findProduct = shop.items.filter(el => el.category === text);
//            document.querySelector('.list-product').innerHTML = "";
//            findProduct.forEach(el => {
//                el.ShowProduct(el);
//            })
//            console.log(findProduct);
//        }
//        // חיפוש מתקדם
//    fullfilter = function() {
//            var e = document.getElementById('full-category-filter').value;
//            // var d = e.filter(c => c.value == '&&' || c.value == '||');
//            //  console.log(d)
//            var filter = `el =>${e}`;
//            var s = (String)(e).indexOf('&&');
//            console.log(s);
//            console.log(eval(filter));
//            let findProduct = shop.items.filter(eval(filter));
//            document.querySelector('.list-product').innerHTML = "";
//            findProduct.forEach(el => {
//                el.ShowProduct(el);
//            })
//            console.log(findProduct);
//        }
//        //חיפוש מתקדם עם מחרוזות
//    searchstring = function() {
//            var e1 = document.getElementById('category-search');
//            var searchCategory = e1.options[e1.selectedIndex].text;
//            var e2 = document.getElementById('category-type');
//            var searchCategoryType = e2.options[e2.selectedIndex].text;
//            var categoryValue = document.getElementById('category-value').value;
//            var filter = `el => el.${searchCategory} ${searchCategoryType} "${categoryValue}"`;
//            console.log(eval(filter))
//            let findProduct = shop.items.filter(eval(filter));
//            document.querySelector('.list-product').innerHTML = "";
//            findProduct.forEach(el => {
//                el.ShowProduct(el);
//            })
//            console.log(findProduct);
//        }
//        // חיפוש מתקדם עם מספרים
//    searchnumber = function() {
//        var e1 = document.getElementById('category-search1');
//        var searchCategory = e1.options[e1.selectedIndex].text;
//        var e2 = document.getElementById('category-type1');
//        var searchCategoryType = e2.options[e2.selectedIndex].text;
//        var categoryValue = document.getElementById('category-value1').value;
//        var filter = `el => el.${searchCategory} ${searchCategoryType} ${categoryValue}`;
//        console.log(eval(filter))
//        let findProduct = shop.items.filter(eval(filter));
//        document.querySelector('.list-product').innerHTML = "";
//        findProduct.forEach(el => {
//            el.ShowProduct(el);
//        })
//        console.log(findProduct);
//    }
//}