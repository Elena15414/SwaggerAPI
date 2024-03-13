describe('delete user', () => {
  it('passes', () => {
    var petId = 414
    cy.request('POST', "/pet", {
      id: petId,
      name:"bobik",
      photoUrls: []
    }).then((response) => {
      expect(response.status).be.eq(200)
      expect(response.body).be.eqls({
      id: petId,
      name:"bobik",
      photoUrls: [],
      tags: []
      })
      cy.request('GET', `/pet/${petId}`).then((response) =>{
        expect(response.status).be.eq(200)
        expect(response.body).be.eqls({
          id: petId,
          name:"bobik",
          photoUrls: [],
          tags: []
        })
      })
    })
  })
  it('delete', () => {
     var petId = 414
     cy.request('DELETE', `/pet/${petId}`).then((response) =>{
        expect(response.status).be.eq(200)

      cy.request({
        method: 'GET',
        url: `/pet/${petId}`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).be.eq(404)
      })
     })
    })
  })
