var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Michael R. Zeng    This a tutorial on the computer algebra system Macaulay2 via the package InvariantRing by Hawes (2013) and Ferraro et.al. (2020) . The package is designed to compute invariants of linearly reductive actions, based partially on the book Computational Invariant Theory (2015) by H. Derksen and G. Kemper.   'Official logo' of M2      "
},
{
  "id": "shorttitlelowercase-2-2-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-2",
  "type": "Figure",
  "number": "0.1",
  "title": "",
  "body": " 'Official logo' of M2    "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction to Macaulay2",
  "body": " Introduction to Macaulay2   What is Macaulay2? (from the official website)  Macaulay2 is a software system created by Dan Grayson and Mike Stillman devoted to supporting research in algebraic geometry and commutative algebra. Macaulay2 includes core algorithms for computing Gröbner bases and graded or multi-graded free resolutions of modules over quotient rings of graded or multi-graded polynomial rings with a monomial ordering. [...] Macaulay2 can compute Betti numbers, Ext, cohomology of coherent sheaves on projective varieties, primary decomposition of ideals, integral closure of rings, and more.    What can Macaulay2 do?  It has your favorite rings of coefficients coefficients.   We can define polynomial rings with ease ...      ... and define ideals.   We can define the quotient ring   which is the coordinate ring of . We can localize the ring at a prime ideal.     What more can Macaulay2 do?  Macaulay2 is by design good at resolutions and Gröbner bases. Let's start with resolutions. For a polynomial ring, gens R returns the List of generators, while vars R returns the generators as a one-row Matrix .   Given a Matrix , we can take its cokernel .   Now that is an - Module , Macaulay2 knows how to produce a free resolution.   ... and since is a ChainComplex , we can access its differentials.   We want to see that is indeed a chain complex. Indeed, the differentials composed twice would be   Next, let's take a look at Gröbner bases. (  What is .. A Gröbner basis?  ) A Gröbner basis is a set of multivariate polynomials that has desirable algorithmic properties. Every set of polynomials can be transformed into a Gröbner basis. This process generalizes three familiar techniques: Gaussian elimination for solving linear systems of equations, the Euclidean algorithm for computing the greatest common divisor of two univariate polynomials, and the Simplex Algorithm for linear programming.     "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "Let’s do some geometry!",
  "body": " Let's do some geometry!   Working with schemes.  Macaulay2 is built with the algebraic geometry in mind. Many of the commutative algebra functionalities have a natural extension to schemes. For example, let's build our beloved projective space .   In , let's make a rational quartic curve given in local coordinates as .    A friend of the twisted cubic      Was eine Kurve ist, glaubt jeder Mensch zu wissen, bis er so viel Mathematik gelernt hat, daß ihn die unzähligen möglichen Abnormalitäten verwirrt gemacht haben.  Everyone knows what a curve is, until he has studied enough mathematics to become confused through the countless number of possible exceptions.  Felix C. Klein   We can make the sheaf of regular functions with ease.   ... and the ideal sheaf .   We can do most things we want with coherent sheaves. For example, we can construct the line bundles .   and do direct sums or tensor products .    We can do all sorts of homological algebra with sheaves. Just do a few lines of code instead of calculating everything by hand! (which can be either good or bad, depending on what your goals are ..)    Even the tangent\/cotangent sheaves are built-in.   ... and of course, we are tempted to calculate some sheaf cohomology!    ... and we have an instance of Serre duality.     The Koszul Complex  Many standard +notions in commutative algebra are built-in, including regular sequences. Let's ask M2 to check for us whether the following sequences are regular in the ring .     For regular local rings, the Koszul complex is exact, so it provides a finite free resolution. Let's try to carry this out for our projective curve . Recall that and .   What does this mean geometrically? If we sheafify everything, then the Koszul complex becomes Here, means the proper pushforward along the inclusion . Therefore, the Koszul resolution upgrades to a locally free resolution of a coherent sheaf.    Auslander-Buchsbaum, Sheaf Version   If is a smooth variety, then every coherent -module has a finite resolution by vector bundles.     "
},
{
  "id": "subsec-4-6",
  "level": "2",
  "url": "section-2.html#subsec-4-6",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " A friend of the twisted cubic    "
},
{
  "id": "thm-1",
  "level": "2",
  "url": "section-2.html#thm-1",
  "type": "Theorem",
  "number": "2.2",
  "title": "Auslander-Buchsbaum, Sheaf Version.",
  "body": " Auslander-Buchsbaum, Sheaf Version   If is a smooth variety, then every coherent -module has a finite resolution by vector bundles.   "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "3",
  "title": "Introduction to Invariant Theory",
  "body": " Introduction to Invariant Theory  The InvariantRing package, written by Hawes (2013) and Ferraro et.al. (2020) , is designed to compute invariants of linearly reductive actions. Useful references include the textbooks Computational Invariant Theory (2015) by H. Derksen and G. Kemper and  Algorithms in Invariant Theory (2008) by B. Sturmfels.  First, we need to ensure the InvariantRing package is loaded.    What is Invariant Theory?  Let a group act linearly on a vector space over a field . This action extends to the polynomial ring by for . A polynomial is an invariant if for all . The set of all such invariant polynomials forms a subring , called the ring of invariants .  A very first example is the invariants of the symmetric group known to Newton. Let's generate the group using the permutations and . This is the well-celebrated fact that can be minimally generated by a simple transposition and an -cycle.    These are our old friends, symmetric polynomials. How about the alternating group ?   Indeed, the invariants are generated by the elementary symmetrics and the Vandemonde determinant.   A set of homogeneous invariants (where ) forms a homogeneous system of parameters if they are algebraically independent and the invariant ring is a finitely generated module over the polynomial subalgebra These are then called primary invariants . Since is Cohen-Macaulay when is linearly reductive (Theorem 2.6.5), it is actually a free module over (Proposition 2.6.3). This means for some homogeneous invariants . These (including ) are called secondary invariants . Together, the primary and secondary invariants generate as a -algebra. Let's try this for .     Diagonal Actions and Quotient Singularities  Now, let's do some geometry. Consider the cyclic group acting on the affine plane by . We want to understand the quotient . Taking quotients contravariantly corresponds to taking the ring of invariants .   ... so is the coordinate ring for the quadric cone!       Next, consider the cyclic group acting on the affine plane by , where is a 3rd root of unity.   ... so is a rational double point of type . TODO: Calculate the invariants for ADE singularities.       Both of the above actions live inside the action of on of bidegree . What are its invariants?   We see that is the only global invariant function of this action. The GIT quotient is therefore which is the affine line. This can be seen from the following doodle of the orbits:       There are 3 kinds of orbits: the hyperbola , the axes, and the origin. The hyperbola form an -worth of closed orbits. The axes are the non-closed orbits, and the origin is the 'stacky point'. The GIT quotient crashes the latter 3 into one single point.    Linearly Reductive Groups and Hilbert's Finiteness Theorem  Recall that a rational representation of a linear algebraic group is a representation such that the action is regular when is viewed as an affine space. A linear algebraic group is linearly reductive if for every rational representation and every , there exists a linear invariant function such that .   (2.2.18) Non-reductive action.  Let be the additive group. We define a regular action on by   The invariant ring is equal to . If , then every invariant vanishes on . The group is therefore not geometrically reductive.    Hilbert's Finiteness Theorem Hilbert 1890   If is a linearly reductive group and is a rational representation, then is a finitely generated -algebra.     Original paper. See Theorem V (p.531)       The Reynolds Operator and a Proof of Hilbert's Theorem   The Reynolds Operator  For a linearly reductive group acting on an affine -variety , the Reynolds operator  is a -module homomorphism that is also a projection onto the invariant ring. This means it satisfies:   for all (Projection property).   for all and (G-invariance).   for all and (Module homomorphism property).  For a finite group where is invertible in , the Reynolds operator is simply averaging over the group: . For other linearly reductive groups (like or in characteristic 0), averaging with the Haar measure provides a good heuristic. Reynolds operators for infinite groups are usually defined via Casimir operators ; for GL_n, SL_n in particular, one may use Cayley's Omega Process (cf. Chapter 4 of DK15).    Hilbert's Proof of Finiteness (Theorem 2.2.10)  Proof Sketch:    Let be the set of all homogeneous invariants of positive degree. Consider the ideal in the polynomial ring . This ideal is generated by all homogeneous invariants of positive degree.    By Hilbert's Basis Theorem, the polynomial ring is Noetherian. Therefore, the ideal is finitely generated. We can choose a finite set of homogeneous G-invariants such that . (The text notes this choice is justified by Proposition 4.1.1, but Hilbert's original argument relies on being finitely generated by some polynomials , then yield invariant generators for as an ideal in generated by invariants).    We claim that these invariants actually generate the entire invariant ring as a -algebra. We prove this by induction on the degree of a homogeneous invariant .    Base case: If , then , which is certainly generated by (or by 1 if one includes constant invariants).   Inductive step: Assume all homogeneous invariants of degree less than are in . Let be homogeneous of degree . Since , we can write for some . We can choose these to be homogeneous such that . Since , we have .   Apply the Reynolds operator to the equation . Since is invariant, . Since each is invariant and is a -module homomorphism (Corollary 2.2.7b), we get:     Each is a homogeneous G-invariant. Its degree is . By the induction hypothesis, each belongs to . Therefore, also belongs to .      By induction, all homogeneous invariants are in . Since is a graded ring generated by its homogeneous elements, it follows that , and thus is finitely generated.    Existence of the Reynolds operator and the Noetherian property are key in this proof. The ideal of invariants is often called the Hilbert ideal .     -Invariants  In this final section, let's try to calculate some -invariants. Take the standard representation of on a -dimensional vector space . Suppose the dual has basis . The symmetric power is another -representation, where elements are binary quadratic forms , where a generic element looks like . Induced by \\begin{pmatrix}a & b \\\\ c & d \\end{pmatrix}\\cdot (x,y) = (ax + by, cx+ dy),  acts quadratically on the 3 coeffiecients.  To start off, let's define the coordinate ring of .   Next, here's a neat way to extract the action on binary forms.   The defining ideal of the group, the action matrix, plus another ring for the 3 coefficients of a binary form is enough to define the action.   What are its invariants?   ... the discriminant of a quadratic equation!  We can run the same Spiel for binary cubic forms. This time, the generic form has 4 coefficients.   This is the degree 4 discriminant for cubic equations.  How about ternary cubic forms ? Recall that these correspond to plane cubic curves . We could do the same as above, but the program won't terminate in a reasonable amount of time. We could instead use a resultant (cf. DK15 Section 2.1).     This is the famous discriminant of an elliptic curve ! It is an irreducible polynomial of degree in variables, with terms. It is closely related to the Eisenstein series . Geometrically, this means that the locus of singular plane cubics in the parameter space is a degree hypersurface.    Some notes on the algorithms  The algorithm currently implemented for computing linearly reductive invariants leverages elimination theory and the properties of the Hilbert ideal.  The core idea of the algorithm (Algorithm 4.1.9 in Derksen & Kemper, \"Computational Invariant Theory\") can be summarized in the following high-level steps:    Represent the Group and Action: The group is described as an affine variety (e.g., by equations in ), and the representation is given by a matrix whose entries are polynomials in the .     Construct the Graph Ideal ( ): An ideal is formed in a larger polynomial ring . This ideal defines the graph of the action, encoding pairs for . Specifically, it's generated by:  The defining equations of (in variables ).  The equations for , which relate the coordinates of to the coordinates of and group parameters .       Eliminate Group Variables: A Gröbner basis of is computed with respect to a monomial order that eliminates the group variables . The elements of that lie in form a Gröbner basis for the ideal . This ideal is the vanishing ideal of the closure of the set .     Compute Generators for the Hilbert Ideal: If are homogeneous generators of , then the polynomials generate the Hilbert ideal  in .     Working around the Reynolds operator: By Proposition 4.1.1 in Derksen & Kemper, if where are homogeneous (not necessarily invariant), then , where is the Reynolds operator. The invariants(LinearlyReductiveAction) method computes the Hilbert ideal first using hilbertIdeal then finds invariant generators degree by degree.     There is ongoing work to implement more direct and potentially efficient methods for constructing the Reynolds operator itself. Two classical approaches being explored are:    Via the Casimir Operator: For a connected semi-simple Lie group , the Casimir operator is a specific element in the center of the universal enveloping algebra of its Lie algebra . It commutes with the action of on any representation and acts as a scalar on irreducible representations. The Reynolds operator can be constructed using the Casimir operator (see Algorithm 4.5.19\/4.5.20 in Derksen & Kemper).     Via Cayley's Omega Process: For and , Cayley's -process produces invariants via explicit differential operators -- the -operator , where are matrix entries. The Reynolds operator can be expressed in terms of iterates of the -operator and powers of its determinant (Propositions 4.5.27 and 4.5.28 in Derksen & Kemper).     That it! Hope you had a lot of fun! --Michael R. Zeng   "
},
{
  "id": "subsec-7-5",
  "level": "2",
  "url": "section-3.html#subsec-7-5",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-7-9",
  "level": "2",
  "url": "section-3.html#subsec-7-9",
  "type": "Figure",
  "number": "3.2",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-7-13",
  "level": "2",
  "url": "section-3.html#subsec-7-13",
  "type": "Figure",
  "number": "3.3",
  "title": "",
  "body": "    "
},
{
  "id": "ex-Ga-action-K2",
  "level": "2",
  "url": "section-3.html#ex-Ga-action-K2",
  "type": "Example",
  "number": "3.4",
  "title": "(2.2.18) Non-reductive action..",
  "body": " (2.2.18) Non-reductive action.  Let be the additive group. We define a regular action on by   The invariant ring is equal to . If , then every invariant vanishes on . The group is therefore not geometrically reductive.  "
},
{
  "id": "thm-hilbert",
  "level": "2",
  "url": "section-3.html#thm-hilbert",
  "type": "Theorem",
  "number": "3.5",
  "title": "Hilbert’s Finiteness Theorem Hilbert 1890<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"thm-hilbert-1-2\"><summary class=\"ptx-footnote__number\" title=\"Footnote 3.6\"><sup> 6 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"thm-hilbert-1-2\"><code class=\"code-inline tex2jax_ignore\">gdz.sub.uni-goettingen.de\/id\/PPN235181684_0036<\/code><\/div><\/details>.",
  "body": " Hilbert's Finiteness Theorem Hilbert 1890   If is a linearly reductive group and is a rational representation, then is a finitely generated -algebra.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
