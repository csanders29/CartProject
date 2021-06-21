package com.team.store.service;

import com.team.store.entity.Cart;

import java.util.List;

public interface CartService {
    List<Cart> findAll();
    Object findById(int itemId);
    void save(Cart theCart);
    void deleteById(int itemId);
}
