package com.team.store.DAO;


import com.team.store.entity.Cart;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CartIMPL implements CartDAO{

    private final EntityManager entityManager;

    @Autowired
    public CartIMPL(EntityManager entityManager) {this.entityManager=entityManager;}

    @Override
    @Transactional
    public List<Cart> findAll(){
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Cart> myQuery = currentSession.createQuery("from Cart");
        return myQuery.getResultList();
    }

    @Override
    public Object findById(int theId) {
        Session currentSession =entityManager.unwrap(Session.class);
        return currentSession.get(Cart.class, theId);
    }

    @Override
    @Transactional
    public void save(Cart theCart){
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theCart);
    }

    @Override
    @Transactional
    public void deleteById(int theId){
        Session currentSession = entityManager.unwrap(Session.class);
        Cart myCart = currentSession.get(Cart.class, theId);
        currentSession.delete(myCart);
    }
}
