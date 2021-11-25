var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      // document.querySelector('#order_date').textContent = date.toUTCString();
      $("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      // var $iTmpl = document.querySelector('#inventory_item').classList.remove();
      var $iTmpl = $("#inventory_item").remove();//document.querySelector('#inventory_item')
      this.template = $iTmpl.textContent;//Handlebars.compile(iTmpl.innerHTML);iTmpl.remove()
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function($item) {
      var id = this.findID($item),
          item = this.get(id);

      item.name = $item.find("[name^=item_name]").val();// !!$item.querySelector(selector).value;
      item.stock_number = $item.find("[name^=item_stock_number]").val();
      item.quantity = $item.find("[name^=item_quantity]").val();
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add(),
          $item = $(this.template.replace(/ID/g, item.id));

      $("#inventory").append($item);//document.querySelector("inventory").insertAdjacentHTML("beforeend",this.template([id:item.id]))
    },
    findParent: function(e) {
      return $(e.target).closest("tr");//document.querySelector(e.target).closest
    },
    findID: function($item) {
      return +$item.find("input[type=hidden]").val();// !!el.querySelector(selector).value;
    },
    deleteItem: function(e) {
      e.preventDefault();
      // var $item = this.findParent(e).remove();// $item.parentNode;
      if (e.target.classList.contains("delete")) {
        let item = this.findParent(e);
        this.remove(this.findID(item));
        item.remove();
      }
      this.remove(this.findID($item));
    },
    updateItem: function(e) {
      if (event.target.tagName == "INPUT") {
        let item = this.findParent(e);

        this.update(item);
      }
      // var $item = this.findParent(e);// $item.parentNode;

      this.update($item);
    },
    bindEvents: function() {
      $("#add_item").on("click", $.proxy(this.newItem, this));//document.querySelectorAll('.my #awesome selector').addEventListener('click', this.newItem.bind(this));

      // function(e) {
        // loop parent nodes from the target to the delegation node
    //     for (var target = e.target; target && target != this; target = target.parentNode) {
    //         if (target.matches(fn.bind(this.newItem))) {
    //             this.call(target, e);
    //             break;
    //         }
    //     }
    // }, false)
      $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

$($.proxy(inventory.init, inventory));//document.addEventListener("DOMContentLodaded",e => inventory.init.bind(inventory)());
