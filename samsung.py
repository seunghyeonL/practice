import sys

sys.stdin = open("input.txt", "r")

T = int(input().strip())


def test_case_run():
    [h1, m1, h2, m2] = [int(n) for n in input().split()]

    m_result = (m1 + m2) % 60
    carry = int((m1 + m2 - m_result) / 60)
    h_result_ = (h1 + h2 + carry) % 12
    h_result = h_result_ if h_result_ != 0 else 12

    return str(h_result) + " " + str(m_result)


for t in range(1, T + 1):
    print(f"#{t}", test_case_run())
