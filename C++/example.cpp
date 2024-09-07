#include <iostream>
#include <vector>
#include <algorithm> // Para std::sort

using namespace std;

int binarySearch(const vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        // Verifica si el objetivo está en mid
        if (arr[mid] == target) {
            return mid;
        }

        // Si el objetivo es mayor, ignora la mitad izquierda
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // Si el objetivo es menor, ignora la mitad derecha
        else {
            right = mid - 1;
        }
    }

    // Si no se encuentra el objetivo
    return -1;
}

int main() {
    vector<int> arr = {2, 3, 4, 10, 40};
    int target = 10;

    // El array debe estar ordenado para la búsqueda binaria
    sort(arr.begin(), arr.end());
    std::partial_sort(arr.begin(), arr.begin() + 3, arr.end());

    int result = binarySearch(arr, target);

    if (result != -1) {
        cout << "Elemento encontrado en el índice " << result << endl;
    } else {
        cout << "Elemento no encontrado" << endl;
    }

    return 0;
}
