package test.java.com.example.springboot_backend;

import com.example.springboot_backend.controller.MathController;
import com.example.springboot_backend.dto.MathResponse;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorControllerTest {
    // ...
    @Test
    public void testAddition() {
        MathController controller = new MathController();
        MathResponse response = controller.add(10, 5);
        assertEquals(15, response.getResult());
    }

    @Test
    public void testSubtraction() {
        MathController controller = new MathController();
        MathResponse response = controller.subtract(10, 4);
        assertEquals(6, response.getResult());
    }

    @Test
    public void testAdditionWithZero() {
        MathController controller = new MathController();
        MathResponse response = controller.add(7, 0);
        assertEquals(7, response.getResult());
    }

    @Test
    public void testSubtractionWithNegative() {
        MathController controller = new MathController();
        MathResponse response = controller.subtract(-3, -6);
        assertEquals(3, response.getResult());
    }
}
