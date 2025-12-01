class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        i = 0
        j = 0
        result = 0
        final = 0
        current = 0
        while j < len(customers):
            if grumpy[j] == 1:
                current += customers[j]
            else:
                result += customers[j] 
            
            while j - i + 1 > minutes:
                if grumpy[i] == 1:
                    current -= customers[i]
                i += 1
            # print(i, j, final)
            final = max(final , current)
            a = final + result
            j += 1
        return a
