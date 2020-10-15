public class StringArrayTest {
    public static List<String> generateStringArray(Integer n){
        List<String>arrayOne = new List<String>();
        for (Integer i =0; i<n; i++){
            arrayOne.add('Test '+ i);
            System.debug(arrayOne[i]);
        }
        return arrayOne;
    }
}

