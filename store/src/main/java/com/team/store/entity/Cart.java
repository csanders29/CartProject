package com.team.store.entity;

import javax.persistence.*;

@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="price")
    private double price;

    @Column(name="stock in store")
    private int inStore;

    @Column(name="buy")
    private boolean buy;

    @Column(name="item num")
    private int itemNum;

    public Cart() {}

    public Cart(String name, double price, int inStore, boolean buy, int itemNum) {
        this.name = name;
        this.price = price;
        this.inStore = inStore;
        this.buy = buy;
        this.itemNum = itemNum;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getInStore() {
        return inStore;
    }

    public void setInStore(int inStore) {
        this.inStore = inStore;
    }

    public boolean isBuy() {
        return buy;
    }

    public void setBuy(boolean buy) {
        this.buy = buy;
    }

    public int getItemNum() {
        return itemNum;
    }

    public void setItemNum(int itemNum) {
        this.itemNum = itemNum;
    }

    @Override
    public String toString() {
        return "Cart {" +
                "id= " +id +
                ", name= " + name + '\''+
                ", price= " + price + '\''+
                ", stockInStore= " + inStore + '\''+
                ", buy= " + buy + '\''+
                ", itemNum= " + itemNum + '\''+
                '}';

    }
}
