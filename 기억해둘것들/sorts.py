T = int(input())

def test_case_run():
    N = int(input())
    numbers = [int(n) for n in input().split()]

    sorted_numbers = sorted(numbers)
    return ' '.join(str(n) for n in sorted_numbers)


def test_case_run_bubble():
    N = int(input())
    numbers = [int(n) for n in input().split()]

    for i in range(N-1) :
        for j in range(i+1, N) :
            if numbers[j] < numbers[i] :
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
    return ' '.join(str(n) for n in numbers)

def test_case_run_merge() :
    N = int(input())
    numbers = [int(n) for n in input().split()]

    def merge(arr1, arr2) :
        index1 = 0
        index2 = 0

        arr_merge = []

        while index1 < len(arr1) or index2 < len(arr2) :
            if index1 == len(arr1) :
                arr_merge.append(arr2[index2])
                index2 += 1
            elif index2 == len(arr2) :
                arr_merge.append(arr1[index1])
                index1 += 1
            elif arr1[index1] < arr2[index2] :
                arr_merge.append(arr1[index1])
                index1 += 1
            else :
                arr_merge.append(arr2[index2])
                index2 += 1

        return arr_merge


    def merge_sort(start, end) :
        if start == end :
            return [numbers[start]]

        middle = int((start + end - (start + end) % 2)/2)

        return merge(merge_sort(start, middle), merge_sort(middle + 1, end))

    return ' '.join(str(n) for n in merge_sort(0, N-1))

def test_case_run_quick() :
    N = int(input())
    numbers = [int(n) for n in input().split()]

    def quick_sort(arr) :
        if len(arr) <= 1 :
            return arr

        pivot = arr[0]
        left = []
        right = []

        for i in range(1, len(arr)) :
            if arr[i] < pivot :
                left.append(arr[i])
            else :
                right.append(arr[i])

        return quick_sort(left) + [arr[0]] + quick_sort(right)

    return ' '.join(str(n) for n in quick_sort(numbers))

for t in range(1, T + 1):
    print(f'#{t}', test_case_run_quick())