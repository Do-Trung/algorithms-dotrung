const menu = [
    {
      id: 1,
      title: "Thể thao",
      parent_id: 0,
    },
    {
      id: 2,
      title: "Học tập",
      parent_id: 0,
    },
    {
      id: 3,
      title: "Thể thao trong nước",
      parent_id: 1,
    },
    {
      id: 4,
      title: "Buổi sáng",
      parent_id: 2,
    },
    {
      id: 5,
      title: "Môi trường",
      parent_id: 2,
    },
    {
      id: 6,
      title: "Thể thao quốc tế",
      parent_id: 1,
    },
    {
      id: 7,
      title: "Môi trường đô thị",
      parent_id: 5,
    },
    {
      id: 8,
      title: "Giao thông ùn tắc",
      parent_id: 4,
    },
  ];
  
  let menuCategory = "";
  function printMenu(menu, parent_id = 0, titleAdd = "") {
    for (let [key, value] of Object.entries(menu)) {
      if (value.parent_id == parent_id) {
        menuCategory += titleAdd + value.title + "\n";
        delete menu[key];
        printMenu(menu, value.id, titleAdd + "--");
      }
    }
  }
  printMenu(menu);
  console.log(menuCategory);