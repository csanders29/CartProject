package com.team.store.service;

import com.team.store.DAO.CartDAO;
import com.team.store.entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceIMPL implements CartService {

    private final CartDAO cartDAO;

    @Autowired

    public CartServiceIMPL(CartDAO cartDAO) {
        this.cartDAO = cartDAO;
    }
    @Override
    public List<Cart> findAll() {return cartDAO.findAll();}
    @Override
    public Object findById(int carId){ return cartDAO.findById(carId);}
    @Override
    public void save(Cart theCart){
    cartDAO.save(theCart);
    }
    @Override
    public void deleteById(int cartId){cartDAO.deleteById(cartId);}
}
