describe('updates a pet', () => {
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
      cy.request('POST', `/pet/${petId}`, {
      id: petId,
      name: "bobik",
      photoUrls: [],
        tags: [
    {
      id: 41450,
      name:"doggie"
    },
  ]
      })
    })
  })
})



