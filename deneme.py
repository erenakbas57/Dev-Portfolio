import numpy as np
import math

def create_matrix(col, row):
    matrix = []
    fact_num = 2 
    plus_num = 7  
    index = 1

    for i in range(row):
        row = []
        for i in range(col):
            factorial = math.factorial(fact_num)
            if index % 2 == 1:
                element = factorial - plus_num
            else:
                element = factorial + plus_num
            row.append(element)
            fact_num += 2  
            plus_num += 2 
        matrix.append(row)
        index += 1
    return np.array(matrix)

matrix = create_matrix(3, 2)  # 3x2 
print(matrix)
