 var myApp = angular.module("myApp", [])
    .controller("myController" , function ($scope) {
        var employees = [
            {name: "Nguyen Van A", gender: "1", salary: 1000, city: "Ha Noi"},
            {name: "Tran Van B", gender: "1", salary: 3000, city: "TP HCM"},
            {name: "Le Thi C", gender: "2", salary: 2000, city: "Da Nang"},
            {name: "Phan Van A", gender: "1", salary: 4000, city: "TP HCM"},
            {name: "Tran Thi D", gender: "2", salary: 3500, city: "TP HCM"},
        ];
        $scope.employees = employees;
        $scope.empGender = "1";
        $scope.empIndex = -1;
        $scope.rowLimit = 5;
        
        $scope.saveEmployee = function () {
            var employee = {name: $scope.empName, gender: $scope.empGender, salary: $scope.empSalary, city: $scope.empCity};
            if($scope.empIndex < 0) { // add new                
                employees.push(employee);
            }
            else { // save
                employees[$scope.empIndex] = employee;
                $scope.empIndex = -1;
                $scope.empName = "";
                $scope.empGender = "1";
                $scope.empSalary = "";
                $scope.empCity = "";
            }
        };
        $scope.deleteEmp = function (index) {
            employees.splice(index,1);
        };
        $scope.editEmp = function (index) {
            $scope.empIndex = index;
            $scope.empName = $scope.employees[index].name;
            $scope.empGender = angular.lowercase($scope.employees[index].gender);
            $scope.empSalary = $scope.employees[index].salary;
            $scope.empCity = $scope.employees[index].city;
        };
        $scope.search = function (item) {
            if($scope.searchText == undefined) {
                return true;
            }
            else {
            if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ) {
                    return true;
                }
            }
            return false;
        }
        
    });
