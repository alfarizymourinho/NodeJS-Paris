let tahun = 2022;
switch (tahun) {
    case tahun % 4 == 0:
        console.log("tahun " + tahun + " = tahun kabinet");
        break;
    default:
        console.log("tahun " + tahun + " = bukan tahun kabinet");
        break;
}