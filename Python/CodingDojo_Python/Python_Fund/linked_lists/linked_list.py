class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class SinglyLinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None

    def print_all_vals(self):
        runner = list.head
        while runner.next != None:
            print runner.value
            runner = runner.next
        if self.tail != None:
            print self.tail.value


    def add_back(self, value):
        node = Node(value)

        if self.head == None:
            self.head = node

        if self.tail != None:
            self.tail.next = node

        self.tail = node

    def add_front(self, value):
        temp = self.head
        self.head = Node(value)
        self.head.next = temp







list = SinglyLinkedList()
list.add_back('hello')
list.add_back('world')
list.add_front('front')
list.add_back('back')
list.print_all_vals()
