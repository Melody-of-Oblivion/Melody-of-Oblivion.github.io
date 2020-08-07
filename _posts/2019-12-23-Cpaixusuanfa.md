---
title: 几种C语言简单排序算法整理
---

### 1.1 冒泡排序

> ​	**算法步骤**
>
> ​	比较相邻的元素。如果第一个比第二个大，就交换他们两个。
>
> ​	对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的	数。
>
> ​	针对所有的元素重复以上的步骤，除了最后一个。
>
> ​	持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。



​	**C语言实现：**

```c
#include <stdio.h>
void bubble_sort( int arr[], int len)
{
    int i, j, temp;
    for (i = 0; i < len - 1; i++)
        for (j = 0; j < len - 1 - i; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
}

int main(void)
{
    int arr[] = { 2, 4, 1, 0, 3, 8, 9, 7, 6, 5};
    int len = sizeof(arr) / sizeof(*arr);
    int i;
    
    bubble_sort(arr, len);
    for (i = 0;i < len - 1;i++)
        printf("%d ",arr[i]);
	return 0;
}
```





### 1.2 选择排序

> ​	**算法步骤**
>
> ​	首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
>
> ​	再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
>
> ​	重复第二步，直到所有元素均排序完毕。



​	**C语言实现：**

```c
#include <stdio.h>
void selection_sort( int arr[], int len)
{
    int i,j;
    for (i = 0;i < len - 1; i++){
        int min = i;
        for (j = i + 1; j < len - 1; j++){
            if (arr[min] > arr[j])
				min = j;
		}
        swap(&arr[min], &arr[i]);
    }
}

void swap( int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main( void)
{
    int arr[] = { 2, 4, 1, 0, 3, 8, 9, 7, 6, 5};
    int len = sizeof(arr) / sizeof(*arr);
    int i;
    
    selection_sort( arr, len);
    for (i = 0;i < len - 1; i++)
        printf("%d ",arr[i]);
	return 0;
}
```





### 1.3 插入排序

> ​	**算法步骤**
>
> ​	将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
>
> ​	从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有	序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）



​	**C语言实现：**

```c
#include <stdio.h>
void insertion_sort( int arr[],  int len)
{
    int i, j, key;
    for (i = 0; i < len; i++){
        key = arr[i];
        j = i - 1;
        while ((j >= 0) && (arr[j] > key)){
			arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}

int main( void)
{
    int arr[] = { 2, 4, 1, 0, 3, 8, 9, 7, 6, 5};
    int len = sizeof(arr) / sizeof(*arr);
    int i;
    
    insertion_sort( arr, len);
    for (i = 0;i < len - 1; i++)
        printf("%d ",arr[i]);
	return 0;
}
```





### 1.4 快速排序

> ​	**算法步骤**
>
> ​	从数列中挑出一个元素，称为 "基准"（pivot）。
>
> ​	重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的	数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操	作。
>
> ​	递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。



```c
#include <stdio.h>
void quick_sort(int array[],int left,int right)
{
	int i = left,j = right;
	int temp;
	int pivot;
	
	pivot = array[(left + right) / 2];
	
	while (i <= j)
	{
		while (array[i] < pivot)
		{
			i++;
		}

		while (array[j] > pivot)
		{
			j--;
		}

		if (i <= j)
		{
			temp = array [i];
			array[i] = array[j];
			array[j] = temp;
			i++;
			j--;
		}
	}
 
	if (left < j)
	{
		quick_sort(array,left,j);
	}

	if (i < right)
	{
		quick_sort(array,i,right);
	}
}

int main(void)
{
	int array[] = {73,108,111,118,101,70,105,115,104,67,46,99,111,109};
	int i,length;
	
	length = sizeof(array) / sizeof (array[0]);
	
	quick_sort(array,0,length-1);
	for (i = 0;i < length;i++)
	{
		printf("%d ",array[i]);
	}
	return 0;
}
```



------

