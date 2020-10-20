// creating first class with public function to build a list from n input
public class StringArrayTest{
// create method that accepts integer as parameter
    public static List<String>generateStringArray(Integer n){
// declare arr1 variable with no elements
        List<String>arr1 = new List<String>();
// for loop to loop 'n' amount of times
        for (integer i = 0; i < n; i++){
// add test 'n' string to our list for each 'n'
            arr1.add('Test '+ i);
//write our list to the log
            System.debug(arr1[i]);
        }       
        return arr1;
    }
}