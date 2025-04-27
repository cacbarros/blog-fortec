# Código presente em: python/serie_fibonacci.py

def fibonacci(n):
    """
    Retorna uma lista com os n primeiros termos da sequência de Fibonacci.
    """
    seq = [0, 1]
    for i in range(2, n):
        seq.append(seq[-1] + seq[-2])
    return seq[:n]

# Exemplo de uso
if __name__ == "__main__":
    n = 10
    resultado = fibonacci(n)
    print(f"Primeiros {n} termos da sequência de Fibonacci: {resultado}")