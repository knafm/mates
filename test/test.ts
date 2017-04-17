import * as Validation from "../src/libs/valid";
import Generator from "../src/libs/uuid"
import {assert} from "chai";

// Проверка функций валидации:
describe("Test validation:", () => {
	describe("Validate ages: ", ()=>{
		it("should be true",()=>{
			assert.equal(true,Validation.ageCheck(110),"110 years")
		});
		it("should be false 1 year old",()=>{
			assert.equal(false,Validation.ageCheck(1),"1 year old")
		});
		it("should be false 121 year old",()=>{
			assert.equal(false,Validation.ageCheck(121),"121 year old")
		})
	});
	describe("Validate Name:",()=>{
		it("should be true",()=>{
			assert.isTrue(Validation.nameCheck("asdfasdfasdf"))
		});
		it("should be false",()=>{
			assert.isFalse(Validation.nameCheck("asdfas334dfasdf"))
		})
	});

});

// Проверка генерации uuid
describe("Test uuid generation:", () => {
	it("Regexp test, should be true",()=>{
		assert.isTrue(/[a-f0-9]{8}-?[a-f0-9]{4}-?[1-5][a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/
			.test(Generator.newGuid()));
	});
});
