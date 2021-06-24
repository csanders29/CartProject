package com.team.store.DAO;

import com.team.store.entity.Cart;

import java.util.List;

public interface CartDAO {
    List<Cart> findAll();
    Object findById(int theId);
    void save(Cart theCart);
    void deleteById(int theId);
}
